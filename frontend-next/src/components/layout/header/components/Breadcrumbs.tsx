'use client'

import * as React from "react";
import {useParams, usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components";
import Link from "next/link";

interface BreadcrumbsProps {
    translations: Record<string, string>;
}

interface ClassData {
    id: string;
    name: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ translations }) => {
    const pathname = usePathname();
    const params = useParams();
    const { id } = params;
    const [classData, setClassData] = React.useState<ClassData | null>({
        id: id ? id[0] : '',
        name: 'СПП (21-ИТ) 23/24/25'
    });

    const pathSegments = pathname
    .split('/')
    .filter((segment) => segment !== '' && segment !== id)
    .map((segment, index, array) => ({
        name: translations[segment] || segment,
        path: array.slice(0, index + 1).join('/'),
    }));

    if (classData) {
        const classSegment = {
            name: classData.name,
            path: `class/${id}`,
        };
        const classIndex = pathSegments.findIndex((segment) => segment.path === 'class');
        if (classIndex !== -1) {
            pathSegments.splice(classIndex, 1, classSegment);
        }
    }

    return (
        <Breadcrumb>
            <BreadcrumbList className='-ml-2'>
                {pathSegments.map((segment, index) => (
                    <React.Fragment key={segment.path}>
                        {index === 0 && <BreadcrumbSeparator />}
                        <BreadcrumbItem className='text-h1Subtitle'>
                            {index === pathSegments.length - 1 ? (
                                <BreadcrumbPage>
                                    {segment.name}
                                </BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink asChild className='hover:underline underline-offset-2'>
                                    <Link href={`/${segment.path}`}>
                                        {segment.name}
                                    </Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export { Breadcrumbs };
export default Breadcrumbs;
