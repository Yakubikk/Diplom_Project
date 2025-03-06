'use client';

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"
import {avatarVariants, AvatarVariantProps} from "./avatar.variants";
import useRipple from "use-ripple-hook";
import mergeRefs from "merge-refs";

export interface AvatarProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
        AvatarVariantProps {
    onClick?: () => void;
    ripple?: boolean | 'light' | 'dark';
}

const Avatar = React.forwardRef<
    React.ComponentRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>((
    {
        className,
        ripple,
        onClick,
        size,
        shape,
        ...props
    }, ref
) => {
    const [rippleRef, rippleEvent] = useRipple({
        color: ripple === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.3)',
    });

    return (
        <AvatarPrimitive.Root
            ref={mergeRefs(ref, rippleRef)}
            className={cn(avatarVariants({ size, shape, isButton: !!onClick }), className)}
            onPointerDown={ripple ? rippleEvent : undefined}
            onClick={onClick}
            {...props}
        />
    );
})
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
    React.ComponentRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
    React.ComponentRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center",
            className
        )}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
