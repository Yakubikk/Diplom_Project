import React from 'react';
import {RegisterForm, Typography} from '@/components';
import Link from "next/link";
import {useTranslations} from "next-intl";

const RegisterBlock = () => {
    const t = useTranslations('Authentication');

    return (
        <div className="flex flex-col h-full w-full items-center justify-center gap-4">
            <Typography variant='h1Title'>
                {t('registration')}
            </Typography>
            <RegisterForm />
            <span className='text-bodySmall text-gray-500'>
                {t('haveAccount') + ' '}
                <Link
                    href='/login'
                    className='text-blue-500 hover:text-blue-700 text-bodySmall'
                >
                    {t('login')}
                </Link>
            </span>
        </div>
    );
};

export { RegisterBlock };
