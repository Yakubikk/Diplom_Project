import React from "react";
import {Header, Sidebar} from "@/components";

export default function MainLayout(
    {
        children
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 flex w-full h-full overflow-hidden">
                <Sidebar />
                <div className="w-full h-full overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    );
}
