"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import { tooltipVariants, TooltipVariantProps } from "./tooltip.variants";
import useRipple from "use-ripple-hook";
import mergeRefs from "merge-refs";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = React.forwardRef<
    React.ComponentRef<typeof TooltipPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
    & { ripple?: boolean | 'light' | 'dark'; }
>(({ asChild = true, ripple, ...props }, ref) => {
    const [rippleRef, rippleEvent] = useRipple({
        color: ripple === 'dark'
            ? 'rgba(0, 0, 0, 0.1)'
            : 'rgba(255, 255, 255, 0.3)',
    });

    return <TooltipPrimitive.Trigger
        ref={mergeRefs(rippleRef, ref)}
        onPointerDown={ripple ? rippleEvent : undefined}
        asChild={asChild}
        {...props}
    />
});
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

const TooltipContent = React.forwardRef<
    React.ComponentRef<typeof TooltipPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
    TooltipVariantProps
>(({ className, variant, size, side = 'bottom', sideOffset = 5, ...props }, ref) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            ref={ref}
            side={side}
            sideOffset={sideOffset}
            className={cn(
                tooltipVariants({ variant, size, className })
            )}
            {...props}
        />
    </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
