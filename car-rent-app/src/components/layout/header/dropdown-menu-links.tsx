'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconChevronDown } from "@tabler/icons-react";

interface MenuItem {
    title: string;
    href: string;
    subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        title: 'Главная',
        href: '/',
    },
    {
        title: 'Забронировать',
        href: '/booking',
    },
    {
        title: 'Автомобили',
        href: '/products',
        subItems: [
            { title: 'Все автомобили', href: '/products/all' },
            { title: 'Новинки', href: '/products/new' },
            { title: 'Бестселлеры', href: '/products/best' },
        ],
    },
    {
        title: 'Услуги',
        href: '/services',
        subItems: [
            { title: 'Консалтинг', href: '/services/consulting' },
            { title: 'Поддержка', href: '/services/support' },
        ],
    },
    {
        title: 'О нас',
        href: '/about',
    },
];

const DropdownMenuLinks: React.FC = () => {
    const [hoverItem, setHoverItem] = useState<string | null>(null);
    const [dimensions, setDimensions] = useState<{width: number; left: number}[]>([]);
    const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        const newDimensions = menuRefs.current.map(ref => {
            if (!ref) return { width: 0, left: 0 };
            const rect = ref.getBoundingClientRect();
            return {
                width: rect.width,
                left: rect.left - (menuRefs.current[0]?.getBoundingClientRect().left || 0)
            };
        });
        setDimensions(newDimensions);
    }, []);

    const isActive = (href: string) => {
        return pathname === href || pathname?.startsWith(`${href}/`);
    };

    const handleMouseEnter = (href: string) => {
        setHoverItem(href);
    };

    const handleMouseLeave = () => {
        setHoverItem(null);
    };

    const activeIndex = menuItems.findIndex(item => isActive(item.href));
    const hoverIndex = menuItems.findIndex(item => item.href === hoverItem);
    const currentIndex = hoverItem ? hoverIndex : activeIndex;

    const currentPos = dimensions[currentIndex]?.left || 0;
    const currentWidth = dimensions[currentIndex]?.width || 0;

    return (
        <div className='relative flex items-center h-full'>
            {dimensions.length > 0 && (
                <div
                    className={`absolute bg-blue-500 rounded-full transition-all duration-500 ease-out`}
                    style={{
                        width: `${currentWidth}px`,
                        height: '48px',
                        top: '50%',
                        left: 0,
                        transform: `translateX(${currentPos}px) translateY(-50%)`,
                        opacity: hoverItem ? 1 : (activeIndex >= 0 ? 1 : 0),
                    }}
                />
            )}

            {menuItems.map((item, index) => (
                <div
                    key={item.title}
                    ref={el => { menuRefs.current[index] = el; }}
                    className='relative h-full z-10'
                    onMouseEnter={() => handleMouseEnter(item.href)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href={item.href} className='flex h-12 mt-4 items-center px-4 gap-2'>
                        <span
                            className={`transition-colors duration-600 font-semibold text-xl ${
                                isActive(item.href) && !hoverItem
                                    ? 'text-white'
                                    : item.href === hoverItem && 'text-white'
                            }`}
                        >
                            {item.title}
                        </span>
                        {item.subItems && (
                            <IconChevronDown
                                width={18}
                                height={18}
                                className={`transition-colors duration-600 mt-1 -mr-1 ${
                                    isActive(item.href) && !hoverItem
                                        ? 'text-white'
                                        : item.href === hoverItem && 'text-white'
                                }`}
                            />
                        )}
                    </Link>

                    {item.subItems && (
                        <div className={`absolute left-0 z-20 transition-all ease-out ${
                            hoverItem === item.href
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-5 pointer-events-none'
                        }`}>
                            <div className={`mt-5 w-48 rounded-md shadow-lg bg-white ring-2 ring-gray-400/10`}>
                                {item.subItems.map((subItem) => (
                                    <Link
                                        key={subItem.title}
                                        href={subItem.href}
                                        className="block px-4 py-2 rounded-md font-medium hover:text-blue-600 hover:translate-x-2 transition-all duration-200 group relative"
                                    >
                                        <span className="relative inline-block">
                                            {subItem.title}
                                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export {DropdownMenuLinks};
export default DropdownMenuLinks;
