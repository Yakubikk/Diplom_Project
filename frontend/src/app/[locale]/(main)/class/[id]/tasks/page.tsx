'use client'

import { useBreadcrumbs } from '@/context/BreadcrumbContext';
import { useParams } from 'next/navigation';
import React, {useEffect} from "react";
import {useTranslations} from "next-intl";

export default function ClassTasksPage() {
    const params = useParams();
    const { id } = params;
    const { setBreadcrumbs } = useBreadcrumbs();
    const t = useTranslations('Class');

    useEffect(() => {
        if (id) {
            setBreadcrumbs([
                {name: id, href: `/class/${id}`},
                {name: t('navbar.tasks'), href: `/class/${id}/tasks`},
            ]);
        }
    }, [id, setBreadcrumbs, t]);

    return (
        <div>
            <h1>Classroom ID: {id}</h1>

        </div>
    );
}