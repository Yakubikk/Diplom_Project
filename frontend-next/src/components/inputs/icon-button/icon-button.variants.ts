import { cva, type VariantProps } from 'class-variance-authority';

export enum IconButtonColors {
  primary = 'primary',
  secondary = 'secondary',
}

export enum IconButtonSizes {
  extraSmall = 'extraSmall',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum IconButtonVariants {
  contained = 'contained',
  outlined = 'outlined',
  text = 'text',
}

const iconButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-bold focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:bg-disabled disabled:text-secondary [&>svg]:size-[1em] [&>svg]:text-[currentColor]',
  {
    variants: {
      color: {
        [`${IconButtonColors.primary}`]: '',
        [`${IconButtonColors.secondary}`]: '',
      },
      variant: {
        [`${IconButtonVariants.contained}`]: 'border-[1px]',
        [`${IconButtonVariants.outlined}`]:
          'border-[1px] bg-white disabled:border-disabled',
        [`${IconButtonVariants.text}`]: '',
      },
      size: {
        [`${IconButtonSizes.extraSmall}`]:
          '[&>svg]:size-auto disabled:bg-transparent',
        [`${IconButtonSizes.small}`]:
          'h-12 w-12 rounded-xl text-body3 leading-body3 [&>img]:max-h-6 [&>img]:max-w-6 [&>svg]:text-[1.5rem]',
        [`${IconButtonSizes.medium}`]:
          'tablet:h-16 tablet:w-16 h-10 w-10 rounded-xl text-body2 leading-body2 [&>img]:-h-8 [&>img]:max-w-8 tablet:[&>svg]:text-[2rem] [&>svg]:text-[1.5rem]',
        [`${IconButtonSizes.large}`]:
          'h-20 w-20 rounded-xl text-body1 leading-body1 [&>img]:max-h-8 [&>img]:max-w-8 [&>svg]:text-[2rem]',
      },
    },
    defaultVariants: {
      color: `${IconButtonColors.primary}`,
      size: `${IconButtonSizes.medium}`,
      variant: `${IconButtonVariants.contained}`,
    },
    compoundVariants: [
      {
        color: `${IconButtonColors.primary}`,
        variant: `${IconButtonVariants.contained}`,
        className:
          'bg-secondary-button text-white hover:border-divider-dark hover:bg-white hover:text-secondary active:bg-secondary-button active:text-white',
      },
      {
        color: `${IconButtonColors.primary}`,
        variant: `${IconButtonVariants.outlined}`,
        className:
          'border-divider-grey text-secondary hover:border-divider-dark active:bg-secondary-button active:text-white [&>svg]:active:text-white',
      },
      {
        color: `${IconButtonColors.primary}`,
        variant: `${IconButtonVariants.text}`,
        className: 'disabled:bg-white',
      },
      {
        color: `${IconButtonColors.secondary}`,
        variant: `${IconButtonVariants.contained}`,
        className: 'bg-background-icon text-primary border-background-icon',
      },
    ],
  }
);

export type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>;

export { iconButtonVariants };
