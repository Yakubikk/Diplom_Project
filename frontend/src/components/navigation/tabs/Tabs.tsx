'use client'

import React from 'react';
import {Link} from "@/i18n/routing";

interface TabItem {
    name: string;
    href: string;
}

interface TabsProps {
    items: TabItem[];
    activeTab: string;
    onTabChange?: (activeTab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ items, activeTab }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex">
                {items.map((item) => (
                    <Link
                        href={item.href}
                        key={item.name}
                        className={`py-1 px-4 font-semibold text-sm transition-all duration-200 border-b-2 ${
                            activeTab === item.name
                                ? 'text-blue-600 border-blue-600'
                                : 'border-transparent hover:border-blue-400 hover:text-blue-400'
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
