'use client'

import React from "react";
import { LocaleSwitcherTypes } from "./swither.types";
import {toggleUserLocale} from "@/services/locale";
import {Button, IconButton} from "@/components";
import check from "@/assets/icons/check.svg";
import Image from "next/image";

const LocaleSwitcher: React.FC<LocaleSwitcherTypes> = ({ text }) => {

    return (
        <div className="flex flex-col gap-6">
            <Button
                ripple
                variant="contained"
                color="primary"
                onClick={toggleUserLocale}
            >
                {text}
            </Button>
            <IconButton
                ripple
                variant="outlined"
                color="secondary"
                onClick={toggleUserLocale}
            >
                {<Image src={check} alt="Arow" width={24} height={24} />}
            </IconButton>
        </div>

    );
};

export { LocaleSwitcher };