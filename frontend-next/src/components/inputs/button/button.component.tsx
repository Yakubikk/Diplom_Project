'use client';

import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { cn } from '@/lib/utils';
import {
    buttonIconSizeVariants,
    type ButtonVariantProps,
    buttonVariants,
} from './button.variants';
import { getRippleVariant } from './button.helper';
import useRipple from "use-ripple-hook";
import mergeRefs from "merge-refs";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, ButtonVariantProps {
    asChild?: boolean;
    ripple?: boolean | 'light' | 'dark';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
         className,
         variant,
         ripple = false,
         color,
         fullWidth,
         asChild = false,
         size,
         children,
         startIcon,
         endIcon,
         ...props
     },
     ref
    ) => {
        const Comp = asChild ? Slot : 'button';
        const rippleType = getRippleVariant(variant, ripple);

        const [rippleRef, rippleEvent] = useRipple({
            color: rippleType === 'dark' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)',
        });

        return (
            <Comp
                className={cn(
                    buttonVariants({ color, variant, fullWidth, size, className })
                )}
                ref={mergeRefs(ref, rippleRef)}
                onPointerDown={ripple ? rippleEvent : undefined}
                {...props}
            >
                <>
                    {startIcon && (
                        <span
                            className={cn(
                                buttonIconSizeVariants({ size }),
                                'ml-[-6px] mr-[10px]'
                            )}
                        >
                            {startIcon}
                        </span>
                    )}
                    {children}
                    {endIcon && (
                        <span
                            className={cn(
                                buttonIconSizeVariants({ size }),
                                'ml-[10px] mr-[-6px]'
                            )}
                        >
                            {endIcon}
                        </span>
                    )}
                </>
            </Comp>
        );
    }
);
Button.displayName = 'Button';

export { Button };
export default Button;
