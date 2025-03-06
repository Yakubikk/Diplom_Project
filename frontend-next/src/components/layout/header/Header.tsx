import React from 'react';
import {
    LocaleSwitcher,
    JoinClassButton,
    TooltipProvider, AccountPopover,
} from "@/components";
import {Breadcrumbs, LogoLink, ToggleSidebarButton} from './components';
import {useTranslations} from "next-intl";

const Header: React.FC = () => {
    const t = useTranslations();
    const translations = {
        calendar: t('Sidebar.calendar'),
        tasks: t('Class.navbar.tasks'),
        users: t('Class.navbar.users'),
    };

    return (
        <div className='w-full min-h-16 flex justify-between items-center px-2 border-b border-gray-300'>
            <div className='flex items-center gap-3'>
                <ToggleSidebarButton />
                <LogoLink />
                <Breadcrumbs translations={translations} />
            </div>
            <div className='flex items-center gap-3'>
                <TooltipProvider disableHoverableContent>
                    <JoinClassButton />
                    <AccountPopover />
                </TooltipProvider>
                <LocaleSwitcher />
            </div>
        </div>
    );
};

export {Header};
export default Header;
