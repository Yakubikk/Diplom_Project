export type Locale = (typeof locales)[number];

export const locales = ['en', 'ru', 'be', 'zh'] as const;
export const defaultLocale: Locale = 'ru';
