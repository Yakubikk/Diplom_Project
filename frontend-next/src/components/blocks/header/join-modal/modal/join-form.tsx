'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '@/components';
import { TextField } from '@/components/inputs/text-field';
import useJoinModal from '@/hooks/useJoinModal';
import { cn } from '@/lib/utils';
import { ApiService } from '@/services/api';
import { type RegisterPayload } from '@/types';

export interface JoinCLassFormProps {
    isModal?: boolean;
}

export interface JoinCLassFormValues {
    classId: string;
}

const JoinCLassForm: React.FC<JoinCLassFormProps> = ({ isModal }) => {
    const t = useTranslations('JoinCLassForm');
    const joinModal = useJoinModal();

    const methods = useForm<JoinCLassFormValues>({
        criteriaMode: 'all',
        defaultValues: {

        },
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods;

    const onSubmit = async (values: RegisterPayload) => {
        console.log('values:', values);

        joinModal.onClose();
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

                </div>
                <div className='flex items-center gap-3'>

                </div>
                <Button
                    size='lg'
                    className={cn(
                        'w-full max-w-[218px] self-center desktop:self-start',
                        isModal ? 'desktop:self-center' : 'desktop:self-start'
                    )}
                    type='submit'
                >
                    {t('sendButton')}
                </Button>
            </form>
        </FormProvider>
    );
};

export { JoinCLassForm };
