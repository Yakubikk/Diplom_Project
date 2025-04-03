import React from 'react';
import {ClassImageBlock, ClassMeetBlock, ClassTasksBlock, Refer} from '@/components';

export default function ClassPage() {
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='flex flex-col gap-6 max-w-[64rem] w-[calc(100%-3rem)] h-full pt-6'>
                <ClassImageBlock />
                <div className='flex gap-6 w-full h-full'>
                    <div className='flex w-1/5 min-w-[20%] h-fit flex-col gap-6'>
                        <ClassMeetBlock />
                        <ClassTasksBlock />
                    </div>
                    <div className='flex w-full h-full flex-col gap-6'>
                        <Refer />
                    </div>
                </div>
            </div>
        </div>
    );
}
