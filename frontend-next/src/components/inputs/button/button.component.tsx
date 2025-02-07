'use client';

import { Slot } from '@radix-ui/react-slot';
import Ripple from 'material-ripple-effects';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { getRippleVariant } from './button.helper';
import {
  buttonIconSizeVariants,
  type ButtonVariantProps,
  buttonVariants,
} from './button.variants';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonVariantProps {
  asChild?: boolean;
  ripple?: boolean | 'light' | 'dark';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      ripple = false,
      className,
      variant,
      color,
      fullWidth,
      asChild = false,
      size,
      children,
      startIcon,
      endIcon,
      onMouseDown,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const rippleEffect = ripple !== undefined && new Ripple();

    return (
      <Comp
        className={cn(
          buttonVariants({ color, variant, fullWidth, size, className })
        )}
        ref={ref}
        onMouseDown={(e) => {
          if (ripple) {
            const rippleVariant = getRippleVariant(variant, ripple);

            rippleEffect.create(e, rippleVariant);
          }

          return typeof onMouseDown === 'function' && onMouseDown(e);
        }}
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
