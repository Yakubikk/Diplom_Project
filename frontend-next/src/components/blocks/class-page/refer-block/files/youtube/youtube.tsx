'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Button, IconButton, Popover, PopoverContent, PopoverTrigger, YoutubeFile} from '@/components';
import {IconDotsVertical, IconTrash} from '@tabler/icons-react';
import {formatDuration} from '../../refer.helper';
import {useTranslations} from "next-intl";

interface YoutubeProps {
    index: number;
    file: YoutubeFile;
    onDelete: (index: number) => void;
}

const Youtube: React.FC<YoutubeProps> = ({index, file, onDelete}) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const t = useTranslations('TextEditor.modals.youtube');
    
    return (
        <div className='flex w-full border border-gray-300 rounded-md'>
            <div
                className='flex w-1/6 h-16 items-center justify-center border-r border-gray-300 overflow-hidden'>
                <Image
                    src={file.thumbnail}
                    alt='Thumbnail'
                    width={70} height={70}
                    className='h-full w-fit'
                />
            </div>
            <div className='flex w-5/6 rounded-r-lg items-center justify-between gap-3 pr-3'>
                <Link
                    href={file.url}
                    target='_blank'
                    className='flex flex-col justify-center w-full h-full pl-3 group overflow-hidden'
                >
                    <span
                        className='text-bodyMedium font-semibold truncate tracking-[.00625em] group-hover:text-blue-600 hover:underline w-fit'>
                        {file.title}
                    </span>
                    <div className='flex items-center gap-1 text-bodySmall font-normal text-[#5f6368]'>
                        <span>
                            Видео YouTube
                        </span>
                        <span className='w-[3px] h-[3px] rounded-full bg-[#5f6368]'/>
                        <span>
                            {formatDuration(file.duration, {
                                hour: {
                                    one: t('hours.one'),
                                    few: t('hours.few'),
                                    many: t('hours.many'),
                                },
                                minute: {
                                    one: t('minutes.one'),
                                    few: t('minutes.few'),
                                    many: t('minutes.many'),
                                },
                            })}
                        </span>
                    </div>
                </Link>
                <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                    <PopoverTrigger asChild>
                        <IconButton variant='text' size='medium-small' ripple>
                            <IconDotsVertical/>
                        </IconButton>
                    </PopoverTrigger>
                    <PopoverContent empty align='end' className='p-2 rounded-xl'>
                        <Button
                            startIcon={<IconTrash/>}
                            variant='outlined'
                            onClick={() => {
                                onDelete(index);
                                setIsPopoverOpen(false);
                            }}
                        >
                            Удалить прикрепленный файл
                        </Button>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}

export {Youtube};
export default Youtube;
