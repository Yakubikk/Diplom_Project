import React from "react";
import {Avatar, AvatarFallback, AvatarImage, AvatarProps} from "@/components";

interface AccountAvatarProps extends AvatarProps {
    src: string;
    fallback: string;
}

const AccountAvatar: React.FC<AccountAvatarProps> = ({src, fallback, ...props}) => {
    return (
        <Avatar {...props}>
            <AvatarImage src={src} alt={fallback} />
            <AvatarFallback>
                {fallback}
            </AvatarFallback>
        </Avatar>
    );
}

export { AccountAvatar };
export default AccountAvatar;
