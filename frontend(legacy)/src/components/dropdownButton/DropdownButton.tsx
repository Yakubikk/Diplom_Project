import React, { useState, useEffect, useRef } from 'react';
import {Tooltip} from "@/components";

interface DropdownButtonProps {
    buttonContent: React.ReactNode;
    children: (closeDropdown: () => void) => React.ReactNode;
    className?: string;
    avatar?: boolean;
    circle?: boolean;
    tooltip?: {
        text: string;
        position: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    };
}

const DropdownButton: React.FC<DropdownButtonProps> = (
    {
        buttonContent,
        children,
        className,
        avatar = false,
        circle = false,
        tooltip,
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`relative inline-block`} ref={dropdownRef}>
            {tooltip ? (
                <Tooltip text={tooltip.text} position={tooltip.position}>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            toggleDropdown();
                        }}
                        className={`button ${className} ${circle && 'rounded-full'} ${
                            isOpen && !avatar && 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    >
                        {buttonContent}
                    </button>
                </Tooltip>
            ) : (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown();
                    }}
                    className={`button ${className} ${circle && 'rounded-full'} ${
                        isOpen && !avatar && 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    {buttonContent}
                </button>
            )}

            <div
                className={`origin-top-right absolute mt-1 z-20 right-0 transition-all duration-200 ease-in-out ${
                    isOpen
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-75 pointer-events-none'
                }`}
            >
                {isOpen && children(closeDropdown)}
            </div>
        </div>
    );
};

export default DropdownButton;
