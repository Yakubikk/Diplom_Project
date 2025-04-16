'use client';

import React from "react";
import {Stack} from "@mui/material";
import {useSidebar} from "@/store";
import './toggle.scss';
import {LogoutButton} from "@/components";

const SidebarToggle: React.FC = () => {
    const { toggle } = useSidebar();
    return (
        <Stack direction='row' height='100%' alignItems='center'>
            <LogoutButton />
            <div className="parent" onClick={toggle}>
                <div className="button">
                    <div className="button__horizontal" />
                    <div className="button__vertical" />
                </div>
            </div>
        </Stack>
    );
}

export {SidebarToggle};
export default SidebarToggle;