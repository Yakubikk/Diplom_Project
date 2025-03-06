'use client'

import { useBreadcrumbs } from '@/context/BreadcrumbContext';
import { useParams } from 'next/navigation';
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {IconDotsVertical, IconInfoCircle, IconInfoCircleFilled, IconVideo} from "@tabler/icons-react";
import {useTranslations} from "next-intl";
import {DropdownButton, Refer} from "@/components";
import {Link} from "@/i18n/routing";

export default function ClassPage() {
    const params = useParams();
    const { id } = params;
    const { setBreadcrumbs } = useBreadcrumbs();
    const t = useTranslations('Class');

    const [infoOpen, setInfoOpen] = useState(false);

    useEffect(() => {
        if (id) {
            setBreadcrumbs([
                {name: 'СПП (21-ИТ) 23/24/25', href: `/class/${id}`},
            ]);
        }
    }, [id, setBreadcrumbs]);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex flex-col gap-6 max-w-[64rem] w-[calc(100%-3rem)] h-full pt-6">
                <div className="w-full h-fit flex flex-col">
                    <div className="relative w-full h-fit flex flex-col">
                        <Image
                            src={'https://cdn.pixabay.com/photo/2024/02/04/17/10/leaves-8552657_960_720.jpg'}
                            alt={'Image'}
                            width={1024}
                            height={240}
                            className={`w-full max-h-[15rem] rounded-lg ${infoOpen && 'rounded-b-none'} object-cover`}
                        />
                        <div
                            className={`absolute bottom-0 left-0 w-full px-4 pb-3 pt-5 text-white ${
                                infoOpen ? 'rounded-b-none' : 'rounded-b-lg'
                            } flex flex-col justify-between custom-gradient z-10`}
                        >
                        <span className="text-4xl font-semibold">
                            СПП (21-ИТ) 23/24/25
                        </span>
                            <span className="text-xl font-medium">
                            3-4 курс,6-7 семестр (ДО) лек-48, лаб-24, практ-18
                        </span>
                        </div>
                        <div className="absolute right-0 bottom-0 text-white">
                            <button
                                className="button w-12 h-12 p-3 rounded-full self-end z-20"
                                onClick={() => setInfoOpen(p => !p)}
                            >
                                {infoOpen
                                    ? <IconInfoCircleFilled width={24} height={24}/>
                                    : <IconInfoCircle width={24} height={24}/>
                                }
                            </button>
                        </div>
                    </div>
                    {infoOpen && (
                        <div className="w-full p-6 shadow-md rounded-b-lg">
                            <span className="text-sm font-medium">
                                <em className="font-semibold">{t('subject')}</em>&nbsp;
                                Современные платформы программирования
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex gap-6 w-full h-full">
                    <div className="flex w-1/5 h-fit flex-col gap-6">
                        <div className="flex flex-col gap-1 p-3 border border-gray-300 rounded-lg">
                            <div className="w-full flex items-center justify-between">
                                <div className="flex gap-3 items-center">
                                    <IconVideo width={24} height={24}/>
                                    <span className="text-sm font-semibold tracking-[.0178571429em]">
                                        {t('meet')}
                                    </span>
                                </div>
                                <DropdownButton
                                    buttonContent={
                                        <IconDotsVertical width={16} height={16}/>
                                    }
                                    circle
                                    className="p-3"
                                >
                                    {() => (
                                        <div className="bg-white shadow-lg w-[192px] py-2 rounded border border-gray-300">
                                            <button
                                                className="w-full text-left text-sm leading-8 font-medium tracking-[.1px] px-4 hover:bg-gray-200">
                                                {t('copyLink')}
                                            </button>
                                        </div>
                                    )}
                                </DropdownButton>
                            </div>
                            <button
                                className="button w-full h-9 text-white bg-blue-600 hover:bg-blue-700 rounded text-sm font-semibold">
                                {t('join')}
                            </button>
                        </div>
                        <div className="flex flex-col gap-1 p-3 border border-gray-300 rounded-lg">
                            <span className="text-sm font-semibold tracking-[.0178571429em] mb-3">
                                {t('upcoming')}
                            </span>
                            <span className="text-sm font-normal">
                                {t('noUpcoming')}
                            </span>
                            <Link
                                href={`/class/${id}/tasks`}
                                className="button w-fit flex items-center px-2 h-9 text-blue-600 rounded
                                hover:bg-blue-100 hover:bg-opacity-50 text-sm font-semibold self-end"
                            >
                                {t('viewAll')}
                            </Link>
                        </div>
                    </div>
                    <div className="flex w-4/5 h-full flex-col gap-6">
                        <Refer />
                    </div>
                </div>
            </div>
        </div>
    );
}