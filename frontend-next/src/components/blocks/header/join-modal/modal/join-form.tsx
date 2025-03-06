'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button, Typography } from '@/components';
import Checkbox from '@/components/inputs/checkbox/checkbox.component';
import { TextField } from '@/components/inputs/text-field';
import useJoinModal from '@/hooks/useJoinModal';
import { cn } from '@/lib/utils';
import { ApiService } from '@/services/api';
import { type RegisterPayload } from '@/types';
import { openPrivacyPolicyPdf } from '@/utils/pdfHelper';

export interface ContactUsFormProps {
    isModal?: boolean;
}

export interface ContactUsFormValues {
    fullName: string;
    email: string;
    phone: string;
    help: string;
    agree: boolean;
}

const ContactUsForm: React.FC<ContactUsFormProps> = ({ isModal }) => {
    const t = useTranslations('ContactUsForm');
    const contactModal = useJoinModal();

    const methods = useForm({
        criteriaMode: 'all',
        defaultValues: {
            fullname: '',
            email: '',
            phone: '',
            message: '',
            agree: false,
        },
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods;

    const onSubmit = async (values: RegisterPayload & { agree: boolean }) => {
        console.log('values:', values);
        await ApiService.postRegister({
            email: values.email,
            fullname: values.fullname,
            message: values.message,
            phone: values.phone,
        });
        contactModal.onClose();
    };

    return (
        <FormProvider {...methods}>
            <form
                className={cn(
                    'flex w-full max-w-[400px] flex-col gap-10 overflow-hidden overflow-y-auto',
                    isModal && 'max-tablet:gap-7'
                )}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
            >
                <div className='mt-10 flex flex-col gap-10 desktop:mt-2'>
                    <TextField
                        clearable
                        {...register('fullname', { required: t('requiredFieldError') })}
                        placeholder={t('fullNamePlaceholder')}
                        error={errors.fullname}
                    />
                    <TextField
                        clearable
                        {...register('email', {
                            required: t('requiredFieldError'),
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: t('invalidEmailError'),
                            },
                        })}
                        error={errors.email}
                        placeholder={t('emailPlaceholder')}
                    />
                    <TextField
                        clearable
                        {...register('phone', {
                            required: t('requiredFieldError'),
                            pattern: {
                                value: /^\+?[0-9]+$/,
                                message: t('invalidPhoneError'),
                            },
                        })}
                        error={errors.phone}
                        placeholder={t('phonePlaceholder')}
                    />
                    <TextField
                        clearable
                        {...register('message', { required: t('requiredFieldError') })}
                        error={errors.message}
                        placeholder={t('helpPlaceholder')}
                    />
                </div>
                <div className='flex items-center gap-3'>
                    <Checkbox
                        {...register('agree', {
                            required: true,
                        })}
                    />
                    <Typography className='text-left text-bodySmall text-secondary/60 tablet:text-bodyMedium'>
                        {t('agreeText')} {t('agreeLinkText')}
                        <span
                            style={{
                                fontSize: '16px',
                                fontWeight: 500,
                                color: '#266cf4',
                                cursor: 'pointer',
                                transition: 'text-decoration 0.2s ease',
                            }}
                            onClick={openPrivacyPolicyPdf}
                            className='hover:underline'
                        >
              {t('agreeContinuation')}
            </span>{' '}
                    </Typography>
                </div>
                <Button
                    size='lg'
                    className={`w-full max-w-[218px] self-center desktop:self-start ${
                        isModal ? 'desktop:self-center' : 'desktop:self-start'
                    }`}
                    type='submit'
                >
                    {t('sendButton')}
                </Button>
            </form>
        </FormProvider>
    );
};

export { ContactUsForm };
