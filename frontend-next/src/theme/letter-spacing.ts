import { type ThemeConfig } from 'tailwindcss/types/config';

export const letterSpacing: ThemeConfig['lineHeight'] = {
  overlineLarge: 'var(--overline-large-letter-spacing)',
  overlineSmall: 'var(--overline-small-letter-spacing)',
  overlineNone: 'var(--overline-none-letter-spacing)',
};
