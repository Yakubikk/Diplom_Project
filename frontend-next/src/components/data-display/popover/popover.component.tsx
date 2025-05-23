'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = React.forwardRef<
    React.ComponentRef<typeof PopoverPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({className, asChild = true, ...props}, ref) => (
    <PopoverPrimitive.Trigger ref={ref} className={className} asChild={asChild} {...props} />
))
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef<
    React.ComponentRef<typeof PopoverPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
    & { empty?: boolean }
>(({ className, align = 'center', sideOffset = 4, empty = false, ...props }, ref) => (
    <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            className={cn(
                'z-50 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                empty ? 'bg-white' : 'rounded-md border p-4 shadow-md',
                className
            )}
            {...props}
        />
    </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
