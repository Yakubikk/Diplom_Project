'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components";
import Link from "next/link";
import React from "react";
import { useSearchParams, usePathname } from 'next/navigation';
import { useTranslations } from "next-intl";

const ClassTabs = () => {
    const params = useSearchParams();
    const classId = params.get('classId');
    const pathname = usePathname();
    const t = useTranslations('Class.navbar');

    const tabs = [
        { 
            value: 'feed', 
            label: t('feed'), 
            href: `/class?classId=${classId}`
        },
        { 
            value: 'tasks', 
            label: t('tasks'), 
            href: `/class/tasks?classId=${classId}`
        },
        { 
            value: 'users', 
            label: t('users'), 
            href: `/class/users?classId=${classId}`
        },
    ];

    const activeTab = tabs.find((tab) => {
        const currentPath = pathname.split('?')[0];
        const tabPath = tab.href.split('?')[0];
        return currentPath === tabPath;
    })?.value || 'feed';

    return (
        <Tabs defaultValue={activeTab} value={activeTab}>
            <TabsList>
                {tabs.map((tab) => (
                    <Link key={tab.value} href={tab.href}>
                        <TabsTrigger
                            variant='text'
                            size='small'
                            value={tab.value}
                        >
                            {tab.label}
                        </TabsTrigger>
                    </Link>
                ))}
            </TabsList>
        </Tabs>
    );
};

export { ClassTabs };
export default ClassTabs;
