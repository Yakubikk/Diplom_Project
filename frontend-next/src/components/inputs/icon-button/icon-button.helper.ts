import {
  type IconButtonVariantProps,
  IconButtonVariants,
} from './icon-button.variants';

export const getRippleVariant = (
  variant: IconButtonVariantProps['variant'],
  ripple: boolean | 'light' | 'dark'
) => {
  if (typeof ripple === 'boolean') {
    if (variant === `${IconButtonVariants.contained}`) return 'light';
    return 'dark';
  }
  return ripple;
};
