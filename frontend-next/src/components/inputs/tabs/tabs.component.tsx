"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import useRipple from "use-ripple-hook";
import mergeRefs from "merge-refs";
import {
    tabsListVariants,
    tabsTriggerVariants,
    tabsContentVariants,
    type TabsListVariantProps,
    type TabsTriggerVariantProps,
    type TabsContentVariantProps,
} from "./tabs.variants";
import { getRippleVariant } from "./tabs.helper";

interface TabsListProps
    extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
        TabsListVariantProps {}

interface TabsTriggerProps
    extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
        TabsTriggerVariantProps {
    ripple?: boolean;
}

interface TabsContentProps
    extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
        TabsContentVariantProps {}

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitive.List>,
    TabsListProps
>(({ className, variant, size, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(tabsListVariants({ variant, size }), className)}
        {...props}
    />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitive.Trigger>,
    TabsTriggerProps
>(({ className, variant, size, ripple = false, ...props }, ref) => {
    const rippleType = getRippleVariant(variant, ripple);
    const [rippleRef, rippleEvent] = useRipple({
        color:
            rippleType === "dark" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.3)",
    });

    return (
        <TabsPrimitive.Trigger
            ref={mergeRefs(ref, rippleRef)}
            className={cn(tabsTriggerVariants({ variant, size }), className)}
            onPointerDown={ripple ? rippleEvent : undefined}
            {...props}
        />
    );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitive.Content>,
    TabsContentProps
>(({ className, variant, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn(tabsContentVariants({ variant }), className)}
        {...props}
    />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
