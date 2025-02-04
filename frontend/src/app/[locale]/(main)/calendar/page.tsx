'use client'

import {useBreadcrumbs} from "@/context/BreadcrumbContext";
import {useEffect} from "react";

export default function Calendar() {
    const { setBreadcrumbs } = useBreadcrumbs();

    useEffect(() => {
        setBreadcrumbs([
            {name: 'Calendar', href: '/calendar'},
        ]);
    }, [setBreadcrumbs]);

    return (
        <div className='w-full h-full bg-red-300' />
    )
}