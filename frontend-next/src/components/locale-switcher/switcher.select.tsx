'use client'

import React, {ChangeEvent, useTransition} from 'react';
import {setUserLocale} from "@/services/locale";
import {Locale} from "@/config";
import {LocaleSwitcherTypes} from "./swither.types";
import {cn} from "@/lib/utils";

const SwitcherSelect: React.FC<LocaleSwitcherTypes> = (
    {
        children,
        defaultValue,
        absolute
    }) => {
    const [isPending, startTransition] = useTransition();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value as Locale;
        startTransition(async () => {
            await setUserLocale(nextLocale);
        });
    }

    return (
        <select
            className={cn(
                'flex w-12 h-12 appearance-none pl-[11px] text-h3Title hover:cursor-pointer border border-gray-400 rounded-[.5rem] bg-transparent',
                'hover:bg-gray-100',
                absolute && 'absolute top-2 right-2'
            )}
            defaultValue={defaultValue}
            disabled={isPending}
            onChange={onSelectChange}
        >
            {children}
        </select>
    );
};

export {SwitcherSelect};
export default SwitcherSelect;
