'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Button } from '@/components';
import { TextField } from '@/components/inputs/text-field';
import { cn } from '@/lib/utils';
import { type LoginPhonePayload } from '@/types';
import { onSubmitPhoneForm } from './login-form.helper';

export interface LoginPhoneFormProps {
    isModal?: boolean;
}

export interface LoginPhoneFormValues {
    phone: string;
}

const LoginPhoneForm: React.FC<LoginPhoneFormProps> = ({ isModal }) => {
    const ta = useTranslations('Authentication');
    const tf = useTranslations('Form');
    const tl = useTranslations('LoginForm');

    const methods = useForm<LoginPhoneFormValues>({
        criteriaMode: 'all',
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods;

    const onSubmit = async (values: LoginPhonePayload) => {
        const response = await onSubmitPhoneForm(values);

        if (response) {
            toast.success(tl('success'));
        } else {
            toast.error(tl('failure'));
        }
    };

    const phoneRegex = /^(?:\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}|\+7 \(\d{3}\) \d{3}-\d{2}-\d{2})$/;

    return (
        <FormProvider {...methods}>
            <form
                className={cn(
                    'flex w-[400px] max-w-[400px] flex-col gap-10',
                    isModal && 'max-tablet:gap-7'
                )}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
            >
                <div className='mt-10 flex flex-col gap-10 desktop:mt-2'>
                    <TextField
                        type='phone'
                        {...register('phone', {
                            required: tf('requiredFieldError'),
                            pattern: {
                                value: phoneRegex,
                                message: tf('invalidPhoneError'),
                            },
                        })}
                        error={errors.phone}
                    />
                </div>
                <Button
                    type='submit'
                    ripple
                    fullWidth
                >
                    {ta('sendCode')}
                </Button>
            </form>
        </FormProvider>
    );
};

export { LoginPhoneForm };
export default LoginPhoneForm;
