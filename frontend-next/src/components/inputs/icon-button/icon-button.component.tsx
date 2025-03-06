'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { iconButtonVariants, IconButtonVariantProps } from './icon-button.variants';
import useRipple from 'use-ripple-hook';
import {getRippleVariant} from "./icon-button.helper";
import mergeRefs from "merge-refs";

export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        IconButtonVariantProps {
    ripple?: boolean | 'light' | 'dark';
    disabled?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            className,
            variant,
            disabled,
            onClick,
            size,
            shape,
            ripple = false,
            children,
            ...props
        },
        ref
    ) => {
        const rippleType = getRippleVariant(variant, ripple);

        const [rippleRef, rippleEvent] = useRipple({
            color: rippleType === 'dark'
                ? 'rgba(0, 0, 0, 0.1)'
                : 'rgba(255, 255, 255, 0.3)',
        });

        return (
            <span
                ref={mergeRefs(ref, rippleRef)}
                className={cn(iconButtonVariants({ variant, size, shape, disabled }), className)}
                onClick={!disabled ? onClick : undefined}
                onPointerDown={ripple && !disabled ? rippleEvent : undefined}
                {...props}
            >
                {children}
            </span>
        );
    }
);

IconButton.displayName = 'IconButton';

export { IconButton };
export default IconButton;
