import React from 'react';
import {LoginForm, LoginPhoneForm, Tabs, TabsContent, TabsList, TabsTrigger, Typography} from '@/components';
import Link from "next/link";
import {useTranslations} from "next-intl";

const LoginBlock = () => {
    const t = useTranslations('Authentication');

    return (
        <div className="flex flex-col h-full pt-32 pb-16 w-full items-center justify-between">
            <div className='flex flex-col gap-4 items-center'>
                <Typography variant='h1Title'>
                    {t('login')}
                </Typography>
                <Tabs defaultValue='phone'>
                    <TabsList>
                        <TabsTrigger
                            variant='contained'
                            value='phone'
                            ripple
                        >
                            {t('byPhone')}
                        </TabsTrigger>
                        <TabsTrigger
                            variant='contained'
                            value='email'
                            ripple
                        >
                            {t('byEmail')}
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value='phone'><LoginPhoneForm /></TabsContent>
                    <TabsContent value='email'><LoginForm /></TabsContent>
                </Tabs>
            </div>
            <span className='text-bodySmall text-gray-500'>
                {t('noAccount') + ' '}
                <Link
                    href='/register'
                    className='text-blue-500 hover:text-blue-700 text-bodySmall'
                >
                    {t('register')}
                </Link>
            </span>
        </div>
    );
};

export { LoginBlock };
