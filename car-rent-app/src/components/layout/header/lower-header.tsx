import React from "react";
import {Logo} from "@/components";
import {Box} from "@mui/material";
import DropdownMenuLinks from "./dropdown-menu-links";
import SidebarToggle from "../sidebar/sidebar-toggle";

const LowerHeader: React.FC = () => {

    return (
        <Box className='border-t border-b border-gray-300 flex justify-between items-center pl-10 h-[84px]'>
            <Logo />
            <DropdownMenuLinks />
            <SidebarToggle />
        </Box>
    );
}

export { LowerHeader };
export default LowerHeader;
