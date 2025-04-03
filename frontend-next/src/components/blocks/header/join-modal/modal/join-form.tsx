'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button, Typography } from '@/components';
import { TextField } from '@/components';
import useJoinModal from '@/hooks/useJoinModal';
import { cn } from '@/lib/utils';
import { ApiService } from '@/services/api';
import { type JoinClassPayload } from '@/types';

export interface JoinCLassFormValues {
    classId: string;
}

const JoinCLassForm: React.FC = () => {
    const joinModal = useJoinModal();

    const methods = useForm<JoinCLassFormValues>({
        criteriaMode: 'all',
        defaultValues: {
            classId: '',
        },
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods;

    const onSubmit = async (values: JoinClassPayload) => {
        console.log('values:', values);

        joinModal.onClose();
    };

    return (
        <FormProvider {...methods}>
            <form
                className={cn(
                    'flex w-full flex-col gap-10 p-0'
                )}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
            >
                <div className='flex flex-col border border-gray-300 rounded-md p-6'>
                    <Typography variant='bodySmallBold'>Class ID</Typography>
                    <Typography variant='bodySmall' className='mb-2'>
                        {'Введите код курса (его можно получить у преподавателя).'}
                    </Typography>
                    <TextField
                        {...register('classId', {
                            required: 'Class ID is required',
                        })}
                        placeholder='Class ID'
                        error={errors.classId}
                        className='w-2/3'
                    />
                </div>
                <Button
                    size='lg'
                    className={cn(
                        'w-full self-center desktop:self-start',
                    )}
                    type='submit'
                >
                    Join
                </Button>
            </form>
        </FormProvider>
    );
};

export { JoinCLassForm };
