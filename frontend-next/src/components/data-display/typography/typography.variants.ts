import { cva, type VariantProps } from 'class-variance-authority';

export enum TypographyColors {
  primary = 'primary',
  secondary = 'secondary',
  breadcrumbs = 'breadcrumbs',
  buttonsHover = 'buttonsHover',
  buttonsActive = 'buttonsActive',
  inputs = 'inputs',
  hover = 'hover',
  white = 'white',
}
export enum TypographyVariants {
  h1Large = 'h1Large',
  h2Large = 'h2Large',
  h3Large = 'h3Large',
  h1Title = 'h1Title',
  h2Title = 'h2Title',
  h3Title = 'h3Title',
  h1Subtitle = 'h1Subtitle',
  h2Subtitle = 'h2Subtitle',
  buttonLarge = 'buttonLarge',
  buttonSmall = 'buttonSmall',
  bodyLarge = 'bodyLarge',
  bodyLargeBold = 'bodyLargeBold',
  bodyMedium = 'bodyMedium',
  bodyMediumBold = 'bodyMediumBold',
  bodySmall = 'bodySmall',
  bodySmallSemibold = 'bodySmallSemibold',
  bodySmallBold = 'bodySmallBold',
  overlineLarge = 'overlineLarge',
  overlineSmall = 'overlineSmall',
  tag = 'tag',
  mobil = 'mobil',
}

export type typographyHTMLElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p';

const typographyVariants = cva('', {
  variants: {
    variant: {
      [`${TypographyVariants.h1Large}`]:
        'tablet:text-h1Large tablet:leading-h1Large font-extrabold text-h1Title leading-h1Title',
      [`${TypographyVariants.h1Title}`]:
        'tablet:text-h1Title tablet:leading-h1Title font-extrabold text-h3Title leading-h3Title',
      [`${TypographyVariants.h1Subtitle}`]:
        'tablet:text-h1Subtitle tablet:leading-h1Subtitle font-normal text-bodyMedium leading-bodyMedium ',
      [`${TypographyVariants.h2Large}`]:
        'tablet:text-h2Large tablet:leading-h2Large font-extrabold text-h1Title leading-h1Title',
      [`${TypographyVariants.h2Title}`]:
        'text-h2Title leading-h2Title font-extrabold',
      [`${TypographyVariants.h2Subtitle}`]:
        'text-h2Subtitle leading-h2Subtitle font-normal ',
      [`${TypographyVariants.h3Large}`]:
        'tablet:text-h3Large tablet:leading-h3Large font-extrabold text-h2Title leading-h2Title',
      [`${TypographyVariants.h3Title}`]:
        'tablet:text-h3Title tablet:leading-h3Title font-bold text-bodyLarge leading-bodyLarge',
      [`${TypographyVariants.buttonLarge}`]:
        'text-buttonLarge leading-buttonLarge font-bold',
      [`${TypographyVariants.buttonSmall}`]:
        'text-buttonSmall leading-buttonSmall font-semibold',
      [`${TypographyVariants.bodyLarge}`]:
        'tablet:text-bodyLarge tablet:leading-bodyLarge font-normal text-bodySmall leading-bodySmall',
      [`${TypographyVariants.bodyLargeBold}`]:
        'text-bodyLargeBold leading-bodyLargeBold font-bold',
      [`${TypographyVariants.bodyMedium}`]:
        'tablet:text-bodyMedium tablet:leading-bodyMedium font-normal text-bodySmall leading-bodySmall',
      [`${TypographyVariants.bodyMediumBold}`]:
        'text-bodyMediumBold leading-bodyMediumBold font-bold',
      [`${TypographyVariants.bodySmall}`]:
        'text-bodySmall leading-bodySmall font-normal',
      [`${TypographyVariants.bodySmallSemibold}`]:
        'text-bodySmallSemibold leading-bodySmallSemibold font-medium',
      [`${TypographyVariants.bodySmallBold}`]:
        'text-bodySmallBold leading-bodySmallBold font-bold',
      [`${TypographyVariants.overlineLarge}`]:
        'text-overlineLarge leading-overlineLarge font-semibold',
      [`${TypographyVariants.overlineSmall}`]:
        'text-overlineSmall leading-overlineSmall font-semibold',
      [`${TypographyVariants.tag}`]: 'text-tag leading-tag',
      [`${TypographyVariants.mobil}`]: 'text-mobil leading-mobil',
    },
    color: {
      [`${TypographyColors.primary}`]: 'text-text-primary',
      [`${TypographyColors.secondary}`]: 'text-text-secondary',
      [`${TypographyColors.breadcrumbs}`]: 'text-text-breadcrumbs',
      [`${TypographyColors.buttonsHover}`]: 'text-text-buttonsHover',
      [`${TypographyColors.buttonsActive}`]: 'text-text-buttonsActive',
      [`${TypographyColors.inputs}`]: 'text-text-inputs',
      [`${TypographyColors.hover}`]: 'text-text-hover',
      [`${TypographyColors.white}`]: 'text-text-white',
    },
  },
  defaultVariants: {
    variant: TypographyVariants.bodyMedium,
    color: TypographyColors.secondary,
  },
});

export const typographyVariantComponent = (
  variant: TypographyVariantProps['variant'],
  component?: typographyHTMLElement
) => {
  if (component) {
    return component;
  }

  switch (variant) {
    case TypographyVariants.h1Large:
    case TypographyVariants.h1Title:
    case TypographyVariants.h1Subtitle:
      return 'h1';

    case TypographyVariants.h2Large:
    case TypographyVariants.h2Title:
    case TypographyVariants.h2Subtitle:
      return 'h2';

    case TypographyVariants.h3Large:
    case TypographyVariants.h3Title:
      return 'h3';

    case TypographyVariants.buttonLarge:
    case TypographyVariants.buttonSmall:
      return 'span';

    case TypographyVariants.bodyLarge:
    case TypographyVariants.bodyLargeBold:
    case TypographyVariants.bodyMedium:
    case TypographyVariants.bodyMediumBold:
    case TypographyVariants.bodySmall:
    case TypographyVariants.bodySmallSemibold:
    case TypographyVariants.bodySmallBold:
      return 'p';

    case TypographyVariants.overlineLarge:
    case TypographyVariants.overlineSmall:
      return 'span';

    case TypographyVariants.tag:
    case TypographyVariants.mobil:
      return 'div';

    default:
      return 'p';
  }
};

export type TypographyVariantProps = VariantProps<typeof typographyVariants>;

export { typographyVariants };
