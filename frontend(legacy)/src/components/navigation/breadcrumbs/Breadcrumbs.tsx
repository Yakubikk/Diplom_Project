'use client'

import React from 'react';
import {useBreadcrumbs} from "@/context/BreadcrumbContext";
import {Link} from "@/i18n/routing";

const Breadcrumbs: React.FC = () => {
    const { breadcrumbs } = useBreadcrumbs();

    return (
        <nav className="flex text-xl">
            <ol className="flex">
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                        <React.Fragment key={index}>
                            {index !== 0 && <li className="mx-2">/</li>}
                            <li>
                                {isLast
                                    ? <span>{item.name}</span>
                                    : <Link href={item.href} className="text-blue-600 hover:text-blue-800">
                                        {item.name}
                                    </Link>
                                }
                            </li>
                        </React.Fragment>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
