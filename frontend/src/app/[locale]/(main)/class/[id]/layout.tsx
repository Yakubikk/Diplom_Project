'use client'

import React, {useEffect, useMemo, useState} from "react";
import { useParams, usePathname } from 'next/navigation';
import { Tabs } from "@/components";
import {useLocale, useTranslations} from "next-intl";

export default function ClassLayout(
    {
        children
    }: Readonly<{
        children: React.ReactNode;
    }>) {

    const params = useParams();
    const { id } = params;
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations('Class.navbar');

    const tabItems = useMemo(() => [
        { name: t('feed'), href: `/class/${id}` },
        { name: t('tasks'), href: `/class/${id}/tasks` },
        { name: t('users'), href: `/class/${id}/users` },
    ], [id, t]);

    const [activeTab, setActiveTab] = useState<string>(tabItems[0].name);

    useEffect(() => {
        const currentTab = tabItems.find(
            tab => `/${locale}${tab.href}` === pathname
        )?.name;
        if (currentTab) setActiveTab(currentTab);
    }, [locale, pathname, tabItems]);

    return (
        <div className="flex w-full h-full flex-col">
            <div className="w-full h-12 px-3 flex justify-between items-center border-b border-gray-300">
                <Tabs items={tabItems} activeTab={activeTab} />
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
