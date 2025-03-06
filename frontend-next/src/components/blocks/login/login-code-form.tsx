'use client';

import React from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { Button, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components';
import { cn } from "@/lib/utils";

const LoginCodeForm: React.FC = () => {
    const methods = useForm({
        defaultValues: {
            code: '',
        },
    });

    const {
        handleSubmit,
        control,
    } = methods;

    const onSubmit = (data: { code: string }) => {
        console.log('Submitted code:', data.code.toUpperCase());
    };

    return (
        <FormProvider {...methods}>
            <form
                className="flex flex-col min-w-[400px] min-h-44 items-center justify-between"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name="code"
                    control={control}
                    rules={{
                        validate: (value) => {
                            if (value.length !== 6) {
                                return 'Код должен быть введён полностью';
                            }
                            return true;
                        },
                    }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <div className='flex flex-col gap-2'>
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
                                <span
                                    className={cn(
                                        'text-bodySmall text-red-500'
                                    )}
                                >
                                    {error.message}
                                </span>
                            )}
                        </div>
                    )}
                />
                <Button type="submit" ripple fullWidth>
                    Submit
                </Button>
            </form>
        </FormProvider>
    );
};

export { LoginCodeForm };
export default LoginCodeForm;
