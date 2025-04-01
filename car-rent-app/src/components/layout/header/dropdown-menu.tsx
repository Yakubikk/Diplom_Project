'use client';

import React, { useState } from 'react';
import {
    Menu,
    MenuItem,
} from '@mui/material';
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const menuItems = [
    {
        title: 'Главная',
        items: [
            { label: 'Ноутбуки', href: '/' },
        ],
    },
    {
        title: 'Продукты',
        items: [
            { label: 'Ноутбуки', href: '/laptops' },
            { label: 'Смартфоны', href: '/phones' },
            { label: 'Аксессуары', href: '/accessories' },
        ],
    },
    {
        title: 'Услуги',
        items: [
            { label: 'Ремонт', href: '/repair' },
            { label: 'Обслуживание', href: '/service' },
            { label: 'Консультация', href: '/consultation' },
        ],
    },
    {
        title: 'О компании',
        items: [
            { label: 'О нас', href: '/about' },
            { label: 'Контакты', href: '/contacts' },
            { label: 'Вакансии', href: '/careers' },
        ],
    },
];

const DropdownMenu: React.FC = () => {
    const [anchorEls, setAnchorEls] = useState<{[key: string]: HTMLElement | null}>({});
    const pathname = usePathname();

    const handleOpen = (menuKey: string, event: React.MouseEvent<HTMLElement>) => {
        setAnchorEls({ ...anchorEls, [menuKey]: event.currentTarget });
    };

    const handleClose = (menuKey: string) => {
        setAnchorEls({ ...anchorEls, [menuKey]: null });
    };

    const isActive = (href: string) => {
        return pathname === href || pathname?.startsWith(`${href}/`);
    };

    return (
        <div className="w-fit">
            <div className="flex flex-row space-x-4">
                {menuItems.map((menu) => {
                    const isMenuOpen = Boolean(anchorEls[menu.title]);
                    const hasActiveItem = menu.items.some(item => isActive(item.href));

                    return (
                        <div
                            key={menu.title}
                            onMouseLeave={() => handleClose(menu.title)}
                            className="relative"
                        >
                            <Link
                                href={menu.items[0].href}
                                aria-controls={`${menu.title}-menu`}
                                aria-haspopup="true"
                                onMouseEnter={(e) => handleOpen(menu.title, e)}
                                className={`transition-colors flex items-center gap-1 ${
                                    hasActiveItem
                                        ? 'text-blue-600'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                            >
                                {menu.title}
                                <IconChevronDown width={16} height={16} />
                            </Link>

                            <Menu
                                id={`${menu.title}-menu`}
                                anchorEl={anchorEls[menu.title]}
                                open={isMenuOpen}
                                onClose={() => handleClose(menu.title)}
                                disableAutoFocusItem
                                hideBackdrop
                                slotProps={{
                                    backdrop: {
                                        className: "pointer-events-none",
                                    },
                                    paper: {
                                        className: "min-w-[180px] rounded shadow-lg mt-1",
                                        onMouseLeave: () => handleClose(menu.title),
                                    },
                                    list: {
                                        className: "p-0",
                                    }
                                }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                {menu.items.map((item) => (
                                    <MenuItem
                                        key={item.label}
                                        onClick={() => handleClose(menu.title)}
                                        component={Link}
                                        href={item.href}
                                        className={`py-1.5 px-3 ${
                                            isActive(item.href)
                                                ? 'bg-blue-50 hover:bg-blue-100'
                                                : 'hover:bg-gray-100'
                                        }`}
                                    >
                                        <span className={`text-sm ${
                                            isActive(item.href)
                                                ? 'text-blue-600 font-medium'
                                                : 'text-gray-800 font-normal'
                                        }`}>
                                            {item.label}
                                        </span>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { DropdownMenu };
export default DropdownMenu;
