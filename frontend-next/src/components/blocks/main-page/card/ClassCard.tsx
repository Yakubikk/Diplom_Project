'use client';

import React from 'react';
import { Classroom } from '@/models/classroom/classroom';
import { IconClipboard, IconDotsVertical, IconFolder } from '@tabler/icons-react';
import {AccountAvatar, IconButton} from '@/components';
import Link from 'next/link';

const ClassCard: React.FC<Classroom> = (classroom) => {
    return (
        <Link
            className='flex flex-col w-full h-fit rounded-lg hover:cursor-pointer hover:shadow-lg'
            href={`/class/${classroom.id}`}
        >
            <div className='w-full h-24 bg-[url(https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center rounded-t-lg flex flex-col text-white'>
                <div className='w-full h-full custom-gradient-reverse py-3 px-4 rounded-t-lg'>
                    <div className='flex gap-2 w-full justify-between'>
                        <div className='flex flex-col w-5/6'>
                            <span className='text-2xl truncate'>{classroom.title}</span>
                            <span className='text-sm truncate'>{classroom.description}</span>
                        </div>
                        <IconButton
                            variant='text'
                            size='medium-small'
                            onClick={e => e.preventDefault()}
                            ripple='light'
                            className='text-white'
                        >
                            <IconDotsVertical />
                        </IconButton>
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
            <div className='flex w-full gap-1 justify-end p-2 border border-gray-300 rounded-b-lg'>
                <IconButton
                    variant='text'
                    size='small'
                    onClick={e => e.preventDefault()}
                    ripple
                >
                    <IconClipboard />
                </IconButton>
                <IconButton
                    variant='text'
                    size='small'
                    onClick={e => e.preventDefault()}
                    ripple
                >
                    <IconFolder />
                </IconButton>
            </div>
        </Link>
    );
};

export { ClassCard };
export default ClassCard;
