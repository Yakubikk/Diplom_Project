'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components";
import Link from "next/link";
import React from "react";
import { useParams, usePathname } from 'next/navigation';
import {useTranslations} from "next-intl";

const ClassTabs = () => {
    const params = useParams();
    const pathname = usePathname();
    const { id } = params;
    const t = useTranslations('Class.navbar');

    const tabs = [
        { value: 'feed', label: t('feed'), href: `/class/${id}` },
        { value: 'tasks', label: t('tasks'), href: `/class/${id}/tasks` },
        { value: 'users', label: t('users'), href: `/class/${id}/users` },
    ];

    const activeTab = tabs.find((tab) =>
        tab.href === pathname
    )?.value || 'feed';

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
