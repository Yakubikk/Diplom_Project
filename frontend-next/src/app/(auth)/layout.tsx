import React from "react";
import type {Metadata} from "next";
import Group from "@/assets/group.svg";
import Logo from "./logo.svg";
import { LocaleSwitcher } from "@/components";

export const metadata: Metadata = {
    title: "MyPSU - Authentication",
};

export default function AuthLayout(
    {
        children
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <div className='w-full h-screen p-4 flex justify-between gap-8 relative'>
            <div className='w-2/5 h-full bg-[#09081F] rounded-[32px] flex items-center overflow-hidden relative'>
                <div className='w-[90%]'>
                    <Group />
                </div>
                <Logo className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='w-3/5 h-full flex items-center justify-center'>
                {children}
            </div>
            <LocaleSwitcher absolute />
        </div>
    );
}
