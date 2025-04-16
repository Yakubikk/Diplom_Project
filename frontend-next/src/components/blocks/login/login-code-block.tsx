'use client';

import React, { useEffect, useState } from 'react';
import { Loading, LoginCodeForm, Typography } from '@/components';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LoginCodeBlock = () => {
    const t = useTranslations('Authentication');
    const router = useRouter();
    const searchParams = useSearchParams();
    const phoneParam = searchParams.get('phone');
    const [phone, setPhone] = useState('');

    // Перенаправляем на /login если phone отсутствует
    useEffect(() => {
        if (!phoneParam) {
            router.replace('/login');
        } else {
            setPhone(decodeURIComponent(phoneParam));
        }
    }, [phoneParam, router]);

    // Если phone нет, не рендерим форму (перенаправление произойдет в useEffect)
    if (!phoneParam) {
        return <Loading />;
    }

    return (
        <div className='flex flex-col h-full w-full items-center justify-center gap-6'>
            <Typography variant='h1Title'>
                {t('enterCode')}
            </Typography>
            <LoginCodeForm phone={phone} />
        </div>
    );
};

export { LoginCodeBlock };
export default LoginCodeBlock;
