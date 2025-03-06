"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Minus } from "lucide-react"

import { cn } from "@/lib/utils"
import './caret.css';

const InputOTP = React.forwardRef<
    React.ComponentRef<typeof OTPInput>,
    React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
    <OTPInput
        ref={ref}
        containerClassName={cn(
            "flex items-center gap-2 has-[:disabled]:opacity-50",
            containerClassName
        )}
        className={cn("disabled:cursor-not-allowed", className)}
        {...props}
    />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
    React.ComponentRef<"div">,
    React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
    React.ComponentRef<"div">,
    React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext)
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

    return (
        <div
            ref={ref}
            className={cn(
                "relative uppercase flex h-14 w-14 items-center justify-center border-y border-r border-gray-300 shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
                isActive && "z-10 ring-1 ring-blue-500",
                className
            )}
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-6 w-0.5 caret bg-black duration-1000" />
                </div>
            )}
        </div>
    )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
    React.ComponentRef<"div">,
    React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
        <Minus />
    </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
