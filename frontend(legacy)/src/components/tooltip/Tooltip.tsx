import React, { useEffect, useState } from 'react';

interface TooltipProps {
    text: string;
    position: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    isModalOpen?: boolean;
    children: React.ReactNode;
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position, isModalOpen = false, children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTimeout, setShowTimeout] = useState<NodeJS.Timeout | null>(null);
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (!isModalOpen) {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                setHideTimeout(null);
            }
            const timeout = setTimeout(() => setIsVisible(true), 500);
            setShowTimeout(timeout);
        }
    };

    const handleMouseLeave = () => {
        if (showTimeout) {
            clearTimeout(showTimeout);
            setShowTimeout(null);
        }
        const timeout = setTimeout(() => setIsVisible(false), 150);
        setHideTimeout(timeout);
    };

    useEffect(() => {
        if (isModalOpen) {
            if (showTimeout) {
                clearTimeout(showTimeout);
                setShowTimeout(null);
            }
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                setHideTimeout(null);
            }
            setIsVisible(false);
        }
    }, [hideTimeout, isModalOpen, showTimeout]);

    useEffect(() => {
        return () => {
            if (showTimeout) clearTimeout(showTimeout);
            if (hideTimeout) clearTimeout(hideTimeout);
        };
    }, [showTimeout, hideTimeout]);

    const getPositionClass = () => {
        switch (position) {
            case 'top':
                return 'bottom-full left-1/2 transform -translate-x-1/2 mb-1';
            case 'bottom':
                return 'top-full left-1/2 transform -translate-x-1/2 mt-1';
            case 'left':
                return 'right-full top-1/2 transform -translate-y-1/2 mr-1';
            case 'right':
                return 'left-full top-1/2 transform -translate-y-1/2 ml-1';
            case 'top-left':
                return 'bottom-full right-1/2 mb-1';
            case 'top-right':
                return 'bottom-full left-1/2 mb-1';
            case 'bottom-left':
                return 'top-full right-1/2 mt-1';
            case 'bottom-right':
                return 'top-full left-1/2 mt-1';
            default:
                return 'bottom-full left-1/2 transform -translate-x-1/2 mb-1';
        }
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <div
                className={`${className}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            <div
                className={`absolute z-50 px-2 py-1 text-xs text-white bg-gray-700 rounded shadow-lg transition-all duration-200 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                } ${getPositionClass()} pointer-events-none`}
            >
                {text}
            </div>
        </div>
    );
};

export default Tooltip;
