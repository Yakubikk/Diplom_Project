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
  'inline-flex items-center justify-center whitespace-nowrap font-semibold tracking-overlineLarge transition-colors focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:bg-disabled disabled:text-white group',
  {
    variants: {
      color: {
        [`${ButtonColors.primary}`]:
          'focus-visible:ring-primary-button-active/20',
        [`${ButtonColors.secondary}`]: 'focus-visible:ring-primary-button/20',
      },
      variant: {
        [`${ButtonVariants.contained}`]: true,
        [`${ButtonVariants.outlined}`]:
          'border-2 bg-white disabled:border-disabled',
        [`${ButtonVariants.text}`]: '',
      },
      size: {
        [`${ButtonSizes.xs}`]:
          'h-6 rounded-xl px-1 text-buttonSmall font-light leading-buttonSmall bg-transparent',
        [`${ButtonSizes.sm}`]:
          'h-12 rounded-[100px] px-5 text-tag font-normal leading-tag tracking-overlineNone border-[1px]',
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
          'bg-primary text-white hover:bg-primary-button-hover active:bg-primary-button-active',
      },
      {
        color: `${ButtonColors.primary}`,
        variant: `${ButtonVariants.outlined}`,
        className:
          'border-secondary text-secondary hover:border-primary hover:text-primary active:border-primary active:text-primary active:shadow-buttonShadow',
      },
      {
        color: `${ButtonColors.primary}`,
        variant: `${ButtonVariants.text}`,
        className:
          'text-primary-button hover:text-primary-button-hover active:text-primary-button-active disabled:bg-white disabled:text-disabled',
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
          'text-text-buttonsHover border-divider hover:border-secondary hover:text-secondary active:bg-secondary active:text-white',
      },
    ],
  }
);

export const buttonIconSizeVariants = cva(
  '[&>svg]:size-[1em] [&>svg]:text-[currentColor] [&>svg]:group-hover:rotate-90 [&>svg]:group-active:rotate-90 [&>svg]:transition-all [&>svg]:duration-100',
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
