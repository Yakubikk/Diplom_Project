import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {FooterComponent, HeaderComponent, ScrollTopButton, Sidebar} from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Аренда у Юли",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className='h-screen overflow-y-scroll'>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased h-fit`}
        >
        <HeaderComponent />
        <Sidebar />
        {children}
        <FooterComponent />
        <ScrollTopButton />
        </body>
        </html>
    );
}
