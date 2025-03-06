'use client';

import React from "react";
import useJoinModal from '@/hooks/useJoinModal';
import {IconPlus} from "@tabler/icons-react";
import {
    IconButton,
    JoinModal,
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components";
import {useTranslations} from "next-intl";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const JoinClassButton: React.FC = () => {
    const { onOpen } = useJoinModal();
    const t = useTranslations('Header.join');
    const path = usePathname();

    return (
        <div className={cn(
            path.match('(/class|/calendar).*') && 'hidden'
        )}>
            <Tooltip>
                <TooltipTrigger ripple='dark'>
                    <IconButton
                        onClick={() => onOpen()}
                    >
                        <IconPlus />
                    </IconButton>
                </TooltipTrigger>
                <TooltipContent>
                    {t('join')}
                </TooltipContent>
            </Tooltip>
            <JoinModal />
        </div>
    );
};

export { JoinClassButton };
export default JoinClassButton;
