import { Slot } from '@radix-ui/react-slot';
import Ripple from 'material-ripple-effects';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { getRippleVariant } from './icon-button.helper';
import {
  iconButtonVariants,
  type IconButtonVariantProps,
} from './icon-button.variants';

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    IconButtonVariantProps {
  asChild?: boolean;
  ripple?: boolean | 'light' | 'dark';
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      ripple = false,
      className,
      variant,
      color,
      asChild = false,
      size,
      onMouseDown,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const rippleEffect = ripple !== undefined && new Ripple();

    return (
      <Comp
        className={cn(iconButtonVariants({ color, variant, size }), className)}
        ref={ref}
        onMouseDown={(e) => {
          if (ripple) {
            const rippleVariant = getRippleVariant(variant, ripple);

            rippleEffect.create(e, rippleVariant);
          }

          return typeof onMouseDown === 'function' && onMouseDown(e);
        }}
        {...props}
      />
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton };
export default IconButton;
