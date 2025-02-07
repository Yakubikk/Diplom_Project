import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { cn } from '@/lib/utils';
// noinspection ES6PreferShortImport
import {
  type TypographyVariantProps,
  type typographyHTMLElement,
  typographyVariantComponent,
  typographyVariants,
} from './typography.variants';

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    TypographyVariantProps {
  asChild?: boolean;
}

const Typography = React.forwardRef<
  HTMLParagraphElement,
  TypographyProps & { component?: typographyHTMLElement }
>(
  (
    { className, color, variant, asChild = false, component, ...props },
    ref
  ) => {
    const Comp = asChild
      ? Slot
      : typographyVariantComponent(variant, component);

    return (
      <Comp
        className={cn(typographyVariants({ variant, color, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = 'Typography';

export { Typography };
export default Typography;
