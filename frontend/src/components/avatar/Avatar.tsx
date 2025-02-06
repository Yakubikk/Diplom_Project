import React from 'react';
import Image from "next/image";

interface AvatarProps {
    src?: string;
    username: string;
    size: 'extraSmall' | 'small' | 'medium' | 'large' | 'huge';
}

const getInitials = (name: string): string => {
    const initials = name.split(' ').map(word => word[0] ? word[0].toUpperCase() : '');
    return initials.join('');
};

const Avatar: React.FC<AvatarProps> = ({ src, username, size }) => {
    const initials = getInitials(username);

    return (
        <div className="rounded-full">
            {!src
                ? <div className={`flex items-center justify-center ${size === 'huge'
                    ? 'w-20 h-20'
                    : size === 'large'
                        ? 'w-16 h-16'
                        : size === 'medium'
                            ? 'w-14 h-14'
                            : size === 'small'
                                ? 'w-12 h-12'
                                : 'w-10 h-10'
                } rounded-full bg-[#3B79FF] bg-opacity-10 border border-[#3B79FF] border-opacity-20 text-[#3B79FF] font-bold`}>
                    {initials}
                </div>
                : <Image
                    src={src}
                    alt='Avatar' width={48} height={48}
                    className={`${size === 'huge'
                        ? 'w-20 h-20' 
                        : size === 'large' 
                            ? 'w-16 h-16'
                            : size === 'medium'
                                ? 'w-14 h-14'
                                : size === 'small'
                                    ? 'w-12 h-12'
                                    : 'w-10 h-10'
                    } rounded-full`}
                />
            }
        </div>

    );
};

export default Avatar;
