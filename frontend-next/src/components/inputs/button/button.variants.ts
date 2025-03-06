import { cva, type VariantProps } from 'class-variance-authority';

export enum ButtonColors {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ButtonSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export enum ButtonVariants {
  contained = 'contained',
  outlined = 'outlined',
  text = 'text',
}

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-semibold tracking-overlineLarge transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-400 group',
  {
    variants: {
      color: {
        [`${ButtonColors.primary}`]: '',
        [`${ButtonColors.secondary}`]: '',
      },
      variant: {
        [`${ButtonVariants.contained}`]: '',
        [`${ButtonVariants.outlined}`]: 'border-2 bg-white',
        [`${ButtonVariants.text}`]: 'border-0',
      },
      size: {
        [`${ButtonSizes.xs}`]:
          'h-6 rounded-sm px-1 text-tag font-light leading-tag bg-transparent',
        [`${ButtonSizes.sm}`]:
          'h-10 rounded-md px-3 text-buttonSmall font-normal leading-tag tracking-overlineNone',
        [`${ButtonSizes.md}`]:
          'h-12 rounded-xl px-6 text-buttonSmall leading-buttonSmall',
        [`${ButtonSizes.lg}`]:
          'laptop:h-16 rounded-xl laptop:px-12 laptop:text-buttonLarge laptop:leading-buttonLarge laptop:font-bold h-12 px-6 text-buttonSmall leading-buttonSmall font-semibold',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      color: `${ButtonColors.primary}`,
      size: `${ButtonSizes.md}`,
      variant: `${ButtonVariants.contained}`,
    },
    compoundVariants: [
      {
        color: `${ButtonColors.primary}`,
        variant: `${ButtonVariants.contained}`,
        className:
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
      },
      {
        color: `${ButtonColors.primary}`,
        variant: `${ButtonVariants.outlined}`,
        className:
          'border-blue-500 hover:border-blue-600 active:border-blue-700 active:shadow-lg',
      },
      {
        color: `${ButtonColors.primary}`,
        variant: `${ButtonVariants.text}`,
        className:
          'hover:bg-blue-100 disabled:bg-white disabled:text-gray-300',
      },
      {
        color: `${ButtonColors.secondary}`,
        variant: `${ButtonVariants.contained}`,
        className: 'bg-secondary text-white',
      },
      {
        color: `${ButtonColors.secondary}`,
        variant: `${ButtonVariants.outlined}`,
        className:
          'border-divider hover:border-secondary hover:text-secondary active:bg-secondary active:text-white',
      },
    ],
  }
);

export const buttonIconSizeVariants = cva(
  '[&>svg]:size-[1em] [&>svg]:text-[currentColor]',
  {
    variants: {
      size: {
        [`${ButtonSizes.xs}`]: '[&>svg]:text-[1.5rem]',
        [`${ButtonSizes.sm}`]: '[&>svg]:text-[1rem]',
        [`${ButtonSizes.md}`]: '[&>svg]:text-[1.5rem]',
        [`${ButtonSizes.lg}`]: '[&>svg]:text-[1.5rem]',
      },
    },
    defaultVariants: {
      size: `${ButtonSizes.md}`,
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonIconsSizeProps = VariantProps<typeof buttonVariants>;
