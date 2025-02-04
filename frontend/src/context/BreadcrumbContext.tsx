'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BreadcrumbItem {
    name: string | string[];
    href: string;
}

interface BreadcrumbContextProps {
    breadcrumbs: BreadcrumbItem[];
    setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextProps | undefined>(undefined);

export const useBreadcrumbs = () => {
    const context = useContext(BreadcrumbContext);
    if (!context) {
        throw new Error('useBreadcrumbs must be used within a BreadcrumbProvider');
    }
    return context;
};

export const BreadcrumbProvider= ({ children }: { children: ReactNode }) => {
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

    return (
        <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
            {children}
        </BreadcrumbContext.Provider>
    );
};
