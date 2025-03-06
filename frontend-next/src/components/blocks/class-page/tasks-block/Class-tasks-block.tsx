'use client'

import React from "react";
import Link from "next/link";
import {Button} from "@/components";
import {useParams} from "next/navigation";
import {useTranslations} from "next-intl";

const ClassTasksBlock:React.FC = () => {
    const params = useParams();
    const { id } = params;
    const t = useTranslations('Class');

    return (
        <div className="flex flex-col gap-1 p-3 border border-gray-300 rounded-lg">
            <span className="text-bodySmall font-semibold mb-3">
                {t('upcoming')}
            </span>
            <span className="text-bodySmall font-normal">
                {t('noUpcoming')}
            </span>
            <Link href={`/class/${id}/tasks`} className='self-end w-fit'>
                <Button size='sm' variant='text' className='text-blue-600 font-medium'>
                    {t('viewAll')}
                </Button>
            </Link>
        </div>
    );
}

export {ClassTasksBlock};
export default ClassTasksBlock;
