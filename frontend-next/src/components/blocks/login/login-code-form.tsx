'use client';

import React from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { Button, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components';
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from 'next/navigation';
import { onSubmitCodeForm } from './login-form.helper';

const LoginCodeForm: React.FC = () => {
    const t = useTranslations('LoginCodeForm');
    const router = useRouter();
    const searchParams = useSearchParams();
    const phone = decodeURIComponent(searchParams.get('phone')!);

    const methods = useForm({
        defaultValues: {
            code: '',
        },
    });

    const {
        handleSubmit,
        control,
    } = methods;

    const onSubmit = async (data: { code: string }) => {
        const response = await onSubmitCodeForm({ code: data.code, phone: phone });

        if (response) {
            console.log(response);
            router.replace('/');
        } else {
            console.log('error');
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                className='flex flex-col min-w-[400px] min-h-44 items-center justify-between'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name='code'
                    control={control}
                    rules={{
                        validate: (value) => {
                            if (value.length !== 6) {
                                return t('error');
                            }
                            return true;
                        },
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <div className='flex flex-col gap-2 items-center'>
                            <span className='text-bodySmall'>
                                {t('description', { phone: phone })}
                            </span>
                            <InputOTP
                                maxLength={6}
                                value={value}
                                onChange={onChange}
                                autoFocus
                            >
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup>
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                            {error && (
                                <span className='text-bodySmall text-red-500'>
                                    {error.message}
                                </span>
                            )}
                        </div>
                    )}
                />
                <Button type='submit' ripple fullWidth>
                    {t('submit')}
                </Button>
            </form>
        </FormProvider>
    );
};

export { LoginCodeForm };
export default LoginCodeForm;
