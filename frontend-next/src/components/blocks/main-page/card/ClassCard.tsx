'use client';

import React from 'react';
import { Classroom } from '@/models/classroom/classroom';
import { IconClipboard, IconDotsVertical, IconFolder } from '@tabler/icons-react';
import { AccountAvatar, IconButton, Popover, PopoverContent, PopoverTrigger } from '@/components';
import Link from 'next/link';
import {cn} from "@/lib/utils";

const ClassCard: React.FC<Classroom> = (classroom) => {
    return (
        <Link
            className='flex flex-col w-full h-fit rounded-lg hover:cursor-pointer hover:shadow-lg'
            href={`/class/${classroom.id}`}
        >
            <div className={cn(
                'w-full h-24 bg-cover bg-center rounded-t-lg flex flex-col text-white',
                'bg-[url(https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]'
            )}>
                <div className='w-full h-full custom-gradient-reverse py-3 px-4 rounded-t-lg'>
                    <div className='flex gap-2 w-full justify-between'>
                        <div className='flex flex-col w-5/6'>
                            <span className='text-h2Subtitle truncate'>{classroom.title}</span>
                            <span className='text-overlineSmall truncate'>{classroom.description}</span>
                            <span className='text-overlineSmall mt-1 truncate'>{classroom.description}</span>
                        </div>
                        <div onClick={e => e.preventDefault()}>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <IconButton
                                        variant='text'
                                        size='medium-small'
                                        ripple='light'
                                        className='text-white hover:bg-gray-600/20'
                                    >
                                        <IconDotsVertical />
                                    </IconButton>
                                </PopoverTrigger>
                                <PopoverContent side='bottom' align='end' className='bg-white'>
                                    <div className='flex p-3 flex-col gap-1'>
                                        {/* Your popover content here */}
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative w-full h-32 border-x border-gray-300'>
                <div className='absolute right-4 -top-10'>
                    <AccountAvatar
                        src='https://i.gifer.com/PE61.gif'
                        fallback='RE'
                        size='extraLarge'
                    />
                </div>
            </div>
            <div className='flex w-full items-center justify-end p-2 border border-gray-300 rounded-b-lg'>
                <div
                    className='flex w-fit gap-1 cursor-default'
                    onClick={e => e.preventDefault()}
                >
                    <IconButton
                        variant='text'
                        size='small'
                        ripple
                    >
                        <IconClipboard />
                    </IconButton>
                    <IconButton
                        variant='text'
                        size='small'
                        ripple
                    >
                        <IconFolder />
                    </IconButton>
                </div>
            </div>
        </Link>
    );
};

export { ClassCard };
export default ClassCard;
