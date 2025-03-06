'use client';

import {IconButton} from "@/components";
import {IconMenu2} from "@tabler/icons-react";
import {useSidebar} from "@/hooks";

const ToggleSidebarButton = () => {
    const sidebar = useSidebar();

    return (
        <IconButton
            onClick={() => {sidebar.toggleSidebar()}}
            ripple
            variant='text'
            shape='square'
        >
            <IconMenu2 />
        </IconButton>
    );
}

export { ToggleSidebarButton };
export default ToggleSidebarButton;
