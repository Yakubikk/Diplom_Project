import Logo from "@/assets/logo.svg";
import Link from "next/link";
import React from "react";
import {useTranslations} from "next-intl";

const LogoLink = () => {
    const t = useTranslations('Sidebar');

    return (
        <Link
            href='/'
            className='flex h-12 gap-2 items-center text-h3Title font-semibold hover:underline underline-offset-2 group'
        >
            <Logo className='group-hover:animate-[spin_4s_ease-in-out_infinite]' />
            {t('myPsu')}
        </Link>
    );
}

export { LogoLink };
export default LogoLink;
