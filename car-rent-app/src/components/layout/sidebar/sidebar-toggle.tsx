'use client';

import React from "react";
import {IconButton, Stack} from "@mui/material";
import {IconShoppingBag, IconUser} from "@tabler/icons-react";
import {useSidebar} from "@/store";
import './toggle.scss';

const SidebarToggle: React.FC = () => {
    const { toggle } = useSidebar();
    return (
        <Stack direction='row' height='100%' alignItems='center'>
            <IconButton size='large'>
                <IconUser />
            </IconButton>
            <IconButton size='large'>
                <IconShoppingBag />
            </IconButton>
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