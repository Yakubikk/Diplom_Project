'use client';

import React, { useEffect, useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { Button, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components';
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';
import { onSubmitCodeForm } from './login-form.helper';

const LoginCodeForm: React.FC<{ phone: string }> = ({ phone }) => {
    const t = useTranslations('LoginCodeForm');
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(15);
    const [showResendButton, setShowResendButton] = useState(false);

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

    const handleResendCode = () => {
        // Здесь добавьте логику для повторной отправки кода
        setTimeLeft(15);
        setShowResendButton(false);
    };

    const getResendText = () => {
        const lastDigit = timeLeft % 10;
        const lastTwoDigits = timeLeft % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return t('resendCode.many', { seconds: timeLeft });
        }

        switch (lastDigit) {
            case 1:
                return t('resendCode.one', { seconds: timeLeft });
            case 2:
            case 3:
            case 4:
                return t('resendCode.few', { seconds: timeLeft });
            default:
                return t('resendCode.many', { seconds: timeLeft });
        }
    };

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setShowResendButton(true);
        }
    }, [timeLeft]);

    return (
        <FormProvider {...methods}>
            <form
                className='flex flex-col min-w-[400px] min-h-52 items-center justify-between'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex flex-col gap-5 items-center'>
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
                </div>
                {showResendButton ? (
                    <Button
                        type='button'
                        size='sm'
                        ripple
                        variant='outlined'
                        onClick={handleResendCode}
                    >
                        {t('resendButton')}
                    </Button>
                ) : (
                    <span className='text-bodySmall'>
                        {getResendText()}
                    </span>
                )}
            </form>
        </FormProvider>
    );
};

export { LoginCodeForm };
export default LoginCodeForm;
