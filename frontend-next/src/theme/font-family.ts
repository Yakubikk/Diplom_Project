import defaultTheme from 'tailwindcss/defaultTheme';
import { type ThemeConfig } from 'tailwindcss/types/config';

export const fontFamily: ThemeConfig['fontFamily'] = {
  sans: `var(--font-sans)` + ', ' + defaultTheme.fontFamily.sans.join(', '),
  serif: `var(--font-serif)` + ', ' + defaultTheme.fontFamily.serif.join(', '),
  mono: `var(--font-mono)` + ', ' + defaultTheme.fontFamily.mono.join(', '),
};
