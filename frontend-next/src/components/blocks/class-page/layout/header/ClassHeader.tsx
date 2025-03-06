'use client';

import { ClassTabs, IconButton, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components";
import React from "react";
import { IconCalendar, IconFolder, IconVideo } from "@tabler/icons-react";
import { useParams, useRouter } from 'next/navigation';

const ClassHeader = () => {
    const params = useParams();
    const router = useRouter();
    const { id } = params;

    const tools = [
        {
            icon: <IconVideo />,
            href: `/meet/${id}`,
            tooltip: 'Присоединиться к видеовстрече',
        },
        {
            icon: <IconCalendar />,
            href: '/calendar',
            tooltip: 'Календарь',
        },
        {
            icon: <IconFolder />,
            href: `/class/${id}`,
            tooltip: 'Папка курса',
        },
    ];

    return (
        <div className='w-full h-12 px-3 flex justify-between items-center border-b border-gray-300'>
            <ClassTabs />
            <div className='flex h-full items-center gap-1'>
                <TooltipProvider disableHoverableContent>
                    {tools.map((tool, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <IconButton
                                    size='small'
                                    shape='square'
                                    variant='text'
                                    ripple
                                    onClick={() => router.push(tool.href)}
                                >
                                    {tool.icon}
                                </IconButton>
                            </TooltipTrigger>
                            <TooltipContent>
                                {tool.tooltip}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </div>
        </div>
    );
}

export { ClassHeader };
export default ClassHeader;
