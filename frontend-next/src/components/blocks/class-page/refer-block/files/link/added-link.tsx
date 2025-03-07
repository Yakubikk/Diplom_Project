'use client';

import {Button, IconButton, Popover, PopoverContent, PopoverTrigger} from "@/components";
import {IconDotsVertical, IconTrash} from "@tabler/icons-react";
import React, {useState} from "react";
import Link from "next/link";

interface AddedLinkProps {
    index: number;
    link: string;
    onDelete: (index: number) => void;
}

const AddedLink: React.FC<AddedLinkProps> = ({index, link, onDelete}) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <div className='flex w-full border border-gray-300 rounded-md'>
            <div className='flex w-1/6 h-16 items-center justify-center border-r border-gray-300 overflow-hidden'>
                <div className='h-full w-fit flex items-center justify-center'>
                    <span className='text-bodyMedium font-semibold'>
                            {'Link'}
                    </span>
                </div>
            </div>
            <div className='flex w-5/6 rounded-r-lg items-center justify-between gap-3 pr-3'>
                <Link
                    href={link}
                    target='_blank'
                    className='flex flex-col justify-center w-full h-full pl-3 group overflow-hidden hover:cursor-pointer group'
                >
                    <span
                        className='text-bodyMedium font-semibold truncate tracking-[.00625em] group-hover:text-blue-600 hover:underline w-fit'>
                        {link}
                    </span>
                    <div className='flex items-center gap-1 text-bodySmall font-normal text-[#5f6368]'>
                        <span>
                            {'link'}
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

export {AddedLink};
export default AddedLink;
