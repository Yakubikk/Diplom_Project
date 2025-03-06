export type Locale = (typeof locales)[number];

export const locales = ['en', 'ru', 'be'] as const;
export const defaultLocale: Locale = 'ru';
