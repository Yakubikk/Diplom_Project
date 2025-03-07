'use client'

import React, { useState } from 'react';
import { Button, IconButton, Popover, PopoverContent, PopoverTrigger } from '@/components';
import { IconDotsVertical, IconTrash } from '@tabler/icons-react';
import Image from "next/image";
import Link from "next/link";

interface UploadedFileProps {
    index: number;
    file: File[];
    onDelete: (index: number) => void;
}

/**
 * A component that displays a preview and some metadata about an uploaded file.
 *
 * @prop {number} index The index of the file in the list of uploaded files.
 * @prop {File[]} file The file object.
 * @prop {function(number): void} onDelete The function to be called when the delete button is clicked.
 *
 * @example
 * <UploadedFile index={0} file={[file]} onDelete={(index) => handleDeleteFile(index)} />
 */
const UploadedFile: React.FC<UploadedFileProps> = ({ index, file, onDelete }) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const formatFileSize = (size: number) => {
        if (size < 1024) return `${size} B`;
        if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    };

    const isImage = file[0].type.startsWith('image/');
    const fileURL = URL.createObjectURL(file[0]);

    return (
        <div className='flex w-full border border-gray-300 rounded-md'>
            <div className='flex w-1/6 h-16 items-center justify-center border-r border-gray-300 overflow-hidden'>
                <div className='h-full w-fit flex items-center justify-center'>
                    {fileURL && isImage ? (
                        <Image
                            src={fileURL}

                            alt='Preview'
                            width={70} height={70}
                            className='h-full w-fit'
                        />
                    ) : (
                        <span className='text-bodyMedium font-semibold'>
                            {file[0].type.split('/')[1].toUpperCase()}
                        </span>
                    )}
                </div>
            </div>
            <div className='flex w-5/6 rounded-r-lg items-center justify-between gap-3 pr-3'>
                <Link
                    href={fileURL}
                    target='_blank'
                    className='flex flex-col justify-center w-full h-full pl-3 group overflow-hidden hover:cursor-pointer group'
                >
                    <span className='text-bodyMedium font-semibold truncate tracking-[.00625em] group-hover:text-blue-600 hover:underline w-fit'>
                        {file[0].name}
                    </span>
                    <div className='flex items-center gap-1 text-bodySmall font-normal text-[#5f6368]'>
                        <span>
                            {file[0].type}
                        </span>
                        <span className='w-[3px] h-[3px] rounded-full bg-[#5f6368]'/>
                        <span>
                            {formatFileSize(file[0].size)}
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

export { UploadedFile };
export default UploadedFile;
