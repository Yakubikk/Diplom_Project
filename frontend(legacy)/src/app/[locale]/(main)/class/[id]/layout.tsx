'use client'

import React, {useEffect, useMemo, useState} from "react";
import { useParams } from 'next/navigation';
import { Tabs } from "@/components";
import {useTranslations} from "next-intl";
import {usePathname} from "@/i18n/routing";
import {IconCalendar, IconFolder, IconVideo} from "@tabler/icons-react";

export default function ClassLayout({
                                        children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const params = useParams();
    const { id } = params;
    const pathname = usePathname();
    const t = useTranslations('Class.navbar');

    const tabItems = useMemo(() => [
        { name: t('feed'), href: `/class/${id}` },
        { name: t('tasks'), href: `/class/${id}/tasks` },
        { name: t('users'), href: `/class/${id}/users` },
    ], [id, t]);

    const [activeTab, setActiveTab] = useState<string>(() => {
        if (typeof window !== "undefined") {
            const currentTab = tabItems.find(
                tab => tab.href === pathname
            )?.name;
            if (currentTab) return currentTab;
        }
        return tabItems[0].name;
    });

    useEffect(() => {
        const currentTab = tabItems.find(
            tab => tab.href === pathname
        )?.name;
        if (currentTab) setActiveTab(currentTab);
    }, [pathname, tabItems]);

    return (
        <div className="flex w-full h-full flex-col">
            <div className="w-full h-12 px-3 flex justify-between items-center border-b border-gray-300">
                <Tabs items={tabItems} activeTab={activeTab} />
                <div className="flex">
                    <button className="button w-10 h-10 p-[10px] rounded-full">
                        <IconVideo width={20} height={20} />
                    </button>
                    <button className="button w-10 h-10 p-[10px] rounded-full">
                        <IconCalendar width={20} height={20} />
                    </button>
                    <button className="button w-10 h-10 p-[10px] rounded-full">
                        <IconFolder width={20} height={20} />
                    </button>
                </div>
            </div>
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    );
}
