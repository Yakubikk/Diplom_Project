import { cva, type VariantProps } from 'class-variance-authority';

export enum IconButtonVariants {
  text = 'text',
  outlined = 'outlined',
  contained = 'contained',
}

export enum IconButtonSizes {
  extraSmall = 'extraSmall',
  small = 'small',
  mediumSmall = 'medium-small',
  medium = 'medium',
  large = 'large',
}

export enum IconButtonShapes {
  circle = 'circle',
  square = 'square',
}

const iconButtonVariants = cva(
    'flex items-center justify-center transition-colors duration-150 cursor-pointer',
    {
      variants: {
        variant: {
          [`${IconButtonVariants.text}`]: 'bg-transparent hover:bg-black/10',
          [`${IconButtonVariants.outlined}`]: 'bg-transparent border border-gray-400 hover:bg-black/10',
          [`${IconButtonVariants.contained}`]: 'bg-black/50 text-white',
        },
        size: {
          [`${IconButtonSizes.extraSmall}`]: 'h-6 w-6 min-w-6 p-2',
          [`${IconButtonSizes.small}`]: 'h-8 w-8 min-w-8 p-1.5',
          [`${IconButtonSizes.mediumSmall}`]: 'h-10 w-10 min-w-10',
          [`${IconButtonSizes.medium}`]: 'h-12 w-12 min-w-12',
          [`${IconButtonSizes.large}`]: 'h-16 w-16 min-w-16',
        },
        shape: {
          [`${IconButtonShapes.circle}`]: 'rounded-full',
          [`${IconButtonShapes.square}`]: 'rounded-[.5rem]',
        },
        disabled: {
          true: 'text-gray-400 cursor-default',
          false: '',
        },
      },
      defaultVariants: {
        variant: `${IconButtonVariants.outlined}`,
        size: `${IconButtonSizes.medium}`,
        shape: `${IconButtonShapes.circle}`,
        disabled: false,
      },
      compoundVariants: [
        {
          variant: `${IconButtonVariants.outlined}`,
          size: `${IconButtonSizes.large}`,
          className: 'border-2',
        },
        {
          variant: `${IconButtonVariants.contained}`,
          size: `${IconButtonSizes.large}`,
          className: 'shadow-lg',
        },
      ],
    }
);

export type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>;

export { iconButtonVariants };
