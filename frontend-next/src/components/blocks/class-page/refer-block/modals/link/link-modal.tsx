import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, TextField } from '@/components';

interface LinkModalProps {
    onClose: () => void;
    onAdd: (link: string) => void;
}

const LinkModal: React.FC<LinkModalProps> = ({ onClose, onAdd }) => {
    const methods = useForm({
        defaultValues: {
            link: '',
        },
    });

    const {
        handleSubmit,
        register,
        watch,
        setValue,
        formState: { errors },
    } = methods;

    const value = watch('link');

    const onSubmit = useCallback(() => {
        onAdd(value);
        onClose();
    }, [onAdd, onClose, value]);

    const handleCancel = () => {
        onClose();
        setValue('link', '');
    };

    return (
        <FormProvider {...methods}>
            <form
                className='w-[512px] p-4 h-full flex flex-col gap-6 items-center self-center'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='w-full flex flex-col gap-2'>
                    <TextField
                        {...register('link', {
                            required: 'Link is required',
                            pattern: {
                                value: /^(https?:\/\/)/,
                                message: 'Please enter a valid URL starting with http:// or https://',
                            },
                        })}
                        placeholder={'Enter link'}
                        name='link'
                    />
                </div>
                <div className='flex gap-2 self-end'>
                    <Button
                        variant='outlined'
                        size='sm'
                        onClick={handleCancel}
                    >
                        {'Cancel'}
                    </Button>
                    <Button
                        type='submit'
                        disabled={!value.trim() || !!errors.link}
                        size='sm'
                    >
                        {'Add'}
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export { LinkModal };
export default LinkModal;
