'use client';

import React, { useState, useEffect } from 'react';
import { IconCalendar, IconHome, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import logo from '@/assets/logo.svg';
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Sidebar: React.FC = () => {
    const t = useTranslations('Sidebar');
    const path = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            const savedIsOpen = sessionStorage.getItem('sidebarIsOpen');
            if (savedIsOpen === 'false') return false;
        }
        return true;
    });

    useEffect(() => {
        sessionStorage.setItem('sidebarIsOpen', JSON.stringify(isOpen));
    }, [isOpen]);

    const links = [
        { label: t('mainPage'), href: '/', icon: <IconHome /> },
        { label: t('calendar'), href: '/calendar', icon: <IconCalendar /> },
    ];

    return (
        <aside
            className={`flex flex-col h-full transition-all duration-300 ease-in-out ${
                isOpen ? 'w-72' : 'w-[76px]'
            }`}
        >
            <div className='flex gap-3 pl-2 items-center min-h-16 border-b border-gray-300'>
                <button className="button min-w-12 h-12 rounded-full p-3" onClick={() => setIsOpen(!isOpen)}>
                    <IconMenu2/>
                </button>

                <Link
                    href='/'
                    className={`flex gap-2 items-center text-xl font-semibold hover:underline underline-offset-2 overflow-hidden transition-all duration-300 ${
                        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                    <Image src={logo} alt={'Logo'} width={30} height={30} />
                    <span>{t('myPsu')}</span>
                </Link>
            </div>

            <div className='w-full h-full py-3 pr-3 flex flex-col border-r border-gray-300'>
                {links.map((link, i) => (
                    <Link
                        key={i}
                        href={link.href}
                        className={`w-full pl-5 py-2 rounded-r-full flex items-center gap-5 whitespace-nowrap overflow-x-hidden text-ellipsis ${
                            path === link.href && 'bg-cyan-50'
                        } hover:bg-gray-100`}
                    >
                        <span className='text-[#5f6368]'>{link.icon}</span>
                        <span
                            className={`transition-all duration-300 ${
                                isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                            }`}
                        >
                            {link.label}
                        </span>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
