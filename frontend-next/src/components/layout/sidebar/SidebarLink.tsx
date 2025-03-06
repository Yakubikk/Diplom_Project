'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/hooks";
import { cn } from "@/lib/utils";
import useRipple from "use-ripple-hook";

interface SidebarLinkProps {
    href: string;
    label: string;
    icon: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, label, icon }) => {
    const path = usePathname();
    const { isSidebarOpen, closeSidebar } = useSidebar();
    const [rippleRef, rippleEvent] = useRipple({
        color: 'rgba(0, 0, 0, 0.1)',
    });

    const handleClick = () => {
        if (window.innerWidth < 768) closeSidebar();
    };

    return (
        <Link
            ref={rippleRef}
            onPointerDown={rippleEvent}
            href={href}
            className={cn(
                'pl-5 pr-2 py-2 rounded-r-full flex items-center gap-5 whitespace-nowrap overflow-x-hidden hover:bg-gray-100',
                path === href && 'bg-[#b0ffff]/40'
            )}
            onClick={handleClick}
        >
            <span>{icon}</span>
            <span
                className={cn(
                    'transition-opacity duration-300 text-bodySmall font-semibold',
                    isSidebarOpen ? 'opacity-100' : 'opacity-0'
                )}
            >
                {label}
            </span>
        </Link>
    );
};

export { SidebarLink };
export default SidebarLink;
