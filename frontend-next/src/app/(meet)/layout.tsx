import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "MyPSU - Meet",
};

export default function MeetLayout(
    {
        children
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <div className='w-full h-screen p-4 flex items-center justify-center'>
            {children}
        </div>
    );
}
