import { type ButtonVariantProps, ButtonVariants } from './button.variants';

export const getRippleVariant = (
  variant: ButtonVariantProps['variant'],
  ripple: boolean | 'light' | 'dark'
) => {
  if (typeof ripple === 'boolean') {
    if (
      variant === `${ButtonVariants.outlined}` ||
      variant === `${ButtonVariants.text}`
    ) {
      return 'dark';
    }
    return 'light';
  }
  return ripple;
};
