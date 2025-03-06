import React from 'react';
import {LoginCodeForm, Typography} from '@/components';
import {useTranslations} from "next-intl";

const LoginCodeBlock = () => {
    const t = useTranslations('Authentication');

    return (
        <div className="flex flex-col h-full w-full items-center justify-center gap-20">
            <Typography variant='h1Title'>
                Введите код
            </Typography>
            <LoginCodeForm />
        </div>
    );
};

export { LoginCodeBlock };
