import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
// noinspection ES6PreferShortImport
import { theme } from './src/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme,
  plugins: [animate],
};
export default config;
