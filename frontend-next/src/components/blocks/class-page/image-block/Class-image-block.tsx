'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import {IconInfoCircle, IconInfoCircleFilled} from '@tabler/icons-react';
import {useTranslations} from 'next-intl';
import {IconButton} from '@/components';
import {cn} from '@/lib/utils';

const ClassImageBlock:React.FC = () => {
    const [infoOpen, setInfoOpen] = useState(false);
    const t = useTranslations('Class');

    return (
        <div className='w-full h-fit flex flex-col'>
            <div className='relative w-full h-fit flex flex-col'>
                <Image
                    src={'https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    alt={'Image'}
                    width={1024}
                    height={240}
                    className={cn(
                        'w-full max-h-[15rem] rounded-lg object-cover',
                        infoOpen && 'rounded-b-none'
                    )}
                />
                <div
                    className={cn(
                        'absolute bottom-0 left-0 w-full px-4 pb-3 pt-5 text-white flex flex-col justify-between custom-gradient z-10',
                        infoOpen ? 'rounded-b-none' : 'rounded-b-lg'
                    )}
                >
                    <span className='text-h1Title font-semibold'>
                        СПП (21-ИТ) 23/24/25
                    </span>
                    <span className='text-h1Subtitle font-medium'>
                        3-4 курс,6-7 семестр (ДО) лек-48, лаб-24, практ-18
                    </span>
                </div>
                <IconButton
                    className='absolute right-1 bottom-1 text-white self-end z-20'
                    size='medium-small'
                    onClick={() => setInfoOpen(p => !p)}
                    variant='text'
                    ripple='light'
                >
                    {infoOpen
                        ? <IconInfoCircleFilled />
                        : <IconInfoCircle />
                    }
                </IconButton>
            </div>
            {infoOpen && (
                <div className='w-full p-6 shadow-md rounded-b-lg'>
                    <span className='text-sm font-medium'>
                        <em className='font-semibold'>{t('subject')}</em>&nbsp;
                        Современные платформы программирования
                    </span>
                </div>
            )}
        </div>
    );
}

export {ClassImageBlock};
export default ClassImageBlock;
