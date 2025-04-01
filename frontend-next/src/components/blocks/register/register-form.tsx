'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Button, Checkbox, TextField, Typography } from '@/components';
import { cn } from '@/lib/utils';
import { type RegisterPayload } from '@/types';
import { openPrivacyPolicyPdf } from '@/utils/pdfHelper';
import {getUserOnSubmit, onSubmitForm} from './register-form.helper';
import {useRouter} from "next/navigation";

export interface RegisterFormProps {
    isModal?: boolean;
}

export interface RegisterFormValues {
    firstname: string;
    lastname: string;
    patronymic: string;
    email: string;
    password: string;
    confirmPassword: string;
    tel?: string;
    isProfessor: boolean;
    terms: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ isModal }) => {
    const ta = useTranslations('Authentication');
    const tr = useTranslations('RegisterForm');
    const tf = useTranslations('Form');
    const router = useRouter();

    const methods = useForm<RegisterFormValues>({
        criteriaMode: 'all',
        defaultValues: {
            firstname: '',
            lastname: '',
            patronymic: '',
            email: '',
            password: '',
            confirmPassword: '',
            isProfessor: false,
            terms: false,
        },
    });

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = methods;

    const password = watch('password');

    const onSubmit = async (values: RegisterPayload & { terms: boolean }) => {
        const response = await onSubmitForm(values);

        if (response) {
            toast.success(tr('success'));
            router.replace('/login');
        } else {
            toast.error(tr('failure'));
        }
    };

    const phoneRegex = /^(?:\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}|\+7 \(\d{3}\) \d{3}-\d{2}-\d{2})$/;

    return (
        <FormProvider {...methods}>
            <form
                className={cn(
                    'flex w-full max-w-[400px] flex-col gap-10',
                    isModal && 'max-tablet:gap-7'
                )}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
            >
                <div className='mt-10 flex flex-col gap-10 desktop:mt-2'>
                    <TextField
                        clearable
                        {...register('firstname', { required: tf('requiredFieldError') })}
                        placeholder={tr('fullnamePlaceholder')}
                        error={errors.firstname}
                    />
                    <TextField
                        clearable
                        {...register('lastname', { required: tf('requiredFieldError') })}
                        placeholder={tr('fullnamePlaceholder')}
                        error={errors.lastname}
                    />
                    <TextField
                        clearable
                        {...register('email', {
                            required: tf('requiredFieldError'),
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: tf('invalidEmailError'),
                            },
                        })}
                        error={errors.email}
                        placeholder={tf('emailPlaceholder')}
                    />
                    <TextField
                        clearable
                        type='password'
                        {...register('password', { required: tf('requiredFieldError') })}
                        error={errors.password}
                        placeholder={tf('passwordPlaceholder')}
                    />
                    <TextField
                        clearable
                        type='password'
                        {...register('confirmPassword', {
                            required: tf('requiredFieldError'),
                            validate: (value) =>
                                value === password
                                || tr('passwordMismatchError'),
                        })}
                        error={errors.confirmPassword}
                        placeholder={tr('confirmPasswordPlaceholder')}
                    />
                    <TextField
                        type='phone'
                        {...register('tel', {
                            required: tf('requiredFieldError'),
                            pattern: {
                                value: phoneRegex,
                                message: tf('invalidPhoneError'),
                            },
                        })}
                        error={errors.tel}
                    />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                        <Checkbox
                            {...register('isProfessor', {
                                required: false,
                            })}
                        />
                        <Typography className='text-left text-bodySmall text-black/60 tablet:text-bodyMedium'>
                            {tr('isProfessor')}
                        </Typography>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Checkbox
                            {...register('terms', {
                                required: true,
                            })}
                        />
                        <Typography className='text-left text-bodySmall text-black/60 tablet:text-bodyMedium'>
                            {tr('agreeText') + ' '}
                            <span
                                onClick={openPrivacyPolicyPdf}
                                className='hover:underline cursor-pointer transition-transform text-blue-600'
                            >
                            {tr('agreeLinkText')}
                        </span>
                            {' ' + tr('agreeContinuation')}
                        </Typography>
                    </div>
                </div>
                <Button
                    type='submit'
                    ripple
                    fullWidth
                >
                    {ta('registerButton')}
                </Button>
            </form>
        </FormProvider>
    );
};

export {RegisterForm};
export default RegisterForm;
