import {FooterComponent, HeaderComponent, ScrollTopButton, Sidebar} from "@/components";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className='h-full'>
            <HeaderComponent />
            <Sidebar />
            {children}
            <FooterComponent />
            <ScrollTopButton />
        </div>
    );
}
