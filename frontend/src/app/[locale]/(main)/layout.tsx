'use client'

import React from "react";
import {Header, Loading, Sidebar} from "@/components";
import {useAuth} from "@/context/AuthContext";

export default function MainLayout(
    {
        children
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    const { user } = useAuth();

    if (!user) return <div className='w-full h-screen flex items-center justify-center'><Loading /></div>;

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                {children}
            </div>
        </div>
    );
}
