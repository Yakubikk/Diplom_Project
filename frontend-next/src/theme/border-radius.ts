import { type ThemeConfig } from 'tailwindcss/types/config';

export const borderRadius: ThemeConfig['borderRadius'] = {
  md: 'var(--border-radius-md)',
  lg: 'var(--border-radius-lg)',
  xl: 'var(--border-radius-xl)',
  none: '0',
  full: '50%',
};
