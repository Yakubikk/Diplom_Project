'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Button, Checkbox } from '@/components';
import { TextField } from '@/components/inputs/text-field';
import { cn } from '@/lib/utils';
import { type LoginPayload } from '@/types';
import { onSubmitForm } from './login-form.helper';

export interface LoginFormValues {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: React.FC = () => {
    const ta = useTranslations('Authentication');
    const tf = useTranslations('Form');
    const tl = useTranslations('LoginForm');

    const methods = useForm<LoginFormValues>({
        criteriaMode: 'all',
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods;

    const onSubmit = async (values: LoginPayload) => {
        const response = await onSubmitForm(values);

        if (response) {
            toast.success(tl('success'));
            console.log(response);
        } else {
            toast.error(tl('failure'));
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                className={cn(
                    'flex w-[400px] max-w-[400px] flex-col gap-10'
                )}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
            >
                <div className='mt-10 flex flex-col gap-10 desktop:mt-2'>
                    <TextField
                        clearable
                        type='email'
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
                    <Checkbox
                    {...register('rememberMe')}
                    label={ta('rememberMe')}
                />
                </div>
                <Button
                    type='submit'
                    ripple
                    fullWidth
                >
                    {ta('loginButton')}
                </Button>
            </form>
        </FormProvider>
    );
};

export {LoginForm};
