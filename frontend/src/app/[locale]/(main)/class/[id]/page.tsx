'use client'

import { useBreadcrumbs } from '@/context/BreadcrumbContext';
import { useParams } from 'next/navigation';
import React, {useEffect} from "react";

export default function ClassPage() {
    const params = useParams();
    const { id } = params;
    const { setBreadcrumbs } = useBreadcrumbs();

    useEffect(() => {
        if (id) {
            setBreadcrumbs([
                {name: id, href: `/class/${id}`},
            ]);
        }
    }, [id, setBreadcrumbs]);

    return (
        <div>
            <h1>Classroom ID: {id}</h1>

        </div>
    );
}