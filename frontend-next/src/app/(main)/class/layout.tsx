import React from "react";
import {ClassHeader} from "@/components";

export default function ClassLayout(
    {
        children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex w-full h-full flex-col overflow-hidden'>
            <ClassHeader />
            <div className='w-full h-full overflow-y-scroll'>{children}</div>
        </div>
    );
}
