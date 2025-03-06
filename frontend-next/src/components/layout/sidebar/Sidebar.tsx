'use client';

import React from 'react';
import { IconCalendar, IconHome } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useSidebar } from "@/hooks";
import SidebarLink from './SidebarLink';
import { cn } from "@/lib/utils";

const Sidebar: React.FC = () => {
    const t = useTranslations('Sidebar');
    const { isSidebarOpen } = useSidebar();

    const links = [
        { label: t('mainPage'), href: '/', icon: <IconHome /> },
        { label: t('calendar'), href: '/calendar', icon: <IconCalendar /> },
    ];

    return (
        <aside className={cn(
            'flex flex-col h-full transition-all duration-300 fixed tablet:relative border-r border-gray-300',
            isSidebarOpen ? 'w-72' : 'tablet:w-[78px] max-tablet:w-0 overflow-hidden max-tablet:opacity-0',
            'max-tablet:z-30 max-tablet:bg-white max-tablet:shadow-lg'
        )}>
            <div className='w-full h-full py-3 pr-3 flex flex-col'>
                {links.map((link, _) => (
                    <SidebarLink key={_} href={link.href} label={link.label} icon={link.icon} />
                ))}
            </div>
        </aside>
    );
};

export { Sidebar };
export default Sidebar;
