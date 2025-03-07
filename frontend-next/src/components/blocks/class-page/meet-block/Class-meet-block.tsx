'use client'

import React, { useState } from "react";
import { IconDotsVertical, IconVideo } from "@tabler/icons-react";
import Link from "next/link";
import { Button, IconButton, Popover, PopoverContent, PopoverTrigger } from "@/components";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import toast from 'react-hot-toast';

const ClassMeetBlock: React.FC = () => {
    const params = useParams();
    const { id } = params;
    const t = useTranslations('Class');
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleCopyLink = () => {
        const meetLink = `http://localhost:8080/meet/${id}`;
        navigator.clipboard.writeText(meetLink)
        .then(() => {
            toast(t('copiedLink'), {
                duration: 2000,
                position: 'bottom-right',
                style: {
                    backgroundColor: '#4b5563',
                    color: 'white',
                    fontWeight: '500'
                },
            });
            setIsPopoverOpen(false);
        })
        .catch((error) => {
            console.error("Failed to copy link:", error);
        });
    };

    return (
        <div className="flex flex-col gap-1 p-3 border border-gray-300 rounded-lg">
            <div className="w-full flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <IconVideo width={24} height={24} />
                    <span className="text-bodySmall font-semibold">
                        {t('meet')}
                    </span>
                </div>
                <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                    <PopoverTrigger>
                        <IconButton
                            size='small'
                            variant='text'
                            className='text-gray-600'
                            ripple
                        >
                            <IconDotsVertical />
                        </IconButton>
                    </PopoverTrigger>
                    <PopoverContent align='end' className='bg-white p-0.5'>
                        <Button
                            variant='text'
                            size='sm'
                            ripple
                            onClick={handleCopyLink}
                        >
                            {t('copyLink')}
                        </Button>
                    </PopoverContent>
                </Popover>
            </div>
            <Link href={`/meet/${id}`} target='_blank' className='w-full'>
                <Button size='sm' fullWidth>
                    {t('join')}
                </Button>
            </Link>
        </div>
    );
}

export { ClassMeetBlock };
export default ClassMeetBlock;
