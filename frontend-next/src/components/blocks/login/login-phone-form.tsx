'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Button, Checkbox } from '@/components';
import { TextField } from '@/components/inputs/text-field';
import { cn } from '@/lib/utils';
import { type LoginPhonePayload } from '@/types';
import { onSubmitPhoneForm } from './login-form.helper';
import { useRouter } from 'next/navigation';

export interface LoginPhoneFormValues {
    phone: string;
    rememberMe: boolean;
}

const LoginPhoneForm: React.FC = () => {
    const ta = useTranslations('Authentication');
    const tf = useTranslations('Form');
    const tl = useTranslations('LoginForm');

    const router = useRouter();

    const methods = useForm<LoginPhoneFormValues>({
        criteriaMode: 'all',
        defaultValues: {
            rememberMe: false,
        }
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods;

    const onSubmit = async (values: LoginPhonePayload) => {
        const response = await onSubmitPhoneForm(values);

        if (response) {
            router.push(`/login/code?phone=${encodeURIComponent(values.phone)}`);
        } else {
            toast.error(tl('failure'));
        }
    };

    const phoneRegex = /^(?:\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}|\+7 \(\d{3}\) \d{3}-\d{2}-\d{2})$/;

    return (
        <FormProvider {...methods}>
            <form
                className={cn(
                    'flex w-[400px] max-w-[400px] flex-col gap-10'
                )}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
            >
                <TextField
                    type='phone'
                    helpText={ta('phoneDescription')}
                    {...register('phone', {
                        required: tf('requiredFieldError'),
                        pattern: {
                            value: phoneRegex,
                            message: tf('invalidPhoneError'),
                        },
                    })}
                    error={errors.phone}
                />
                <Checkbox
                    {...register('rememberMe')}
                    label={ta('rememberMe')}
                />
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
