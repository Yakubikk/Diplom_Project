import React from "react";
import {
    AccountAvatar,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from "@/components";

const AccountPopover:React.FC = () => {
    return (
        <Popover>
            <Tooltip>
                <TooltipTrigger ripple='light'>
                    <PopoverTrigger>
                        <AccountAvatar
                            src='https://i.gifer.com/PE61.gif'
                            fallback='RE'
                        />
                    </PopoverTrigger>
                </TooltipTrigger>
                <TooltipContent>
                    Account
                </TooltipContent>
            </Tooltip>
            <PopoverContent align='end' className='w-72 bg-blue-100'>
                Hello
            </PopoverContent>
        </Popover>
    );
}

export { AccountPopover };
export default AccountPopover;
