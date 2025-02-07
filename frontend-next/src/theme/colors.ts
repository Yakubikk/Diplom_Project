import { type ThemeConfig } from 'tailwindcss/types/config';

export const colors: ThemeConfig['colors'] = {
  primary: {
    DEFAULT: 'hsla(var(--primary), <alpha-value>)',
    button: {
      DEFAULT: 'hsla(var(--button-primary), <alpha-value>)',
      active: 'hsla(var(--button-primary-active), <alpha-value>)',
      hover: 'hsla(var(--button-primary-hover), <alpha-value>)',
    },
  },
  secondary: {
    DEFAULT: 'hsla(var(--secondary), <alpha-value>)',
    button: {
      DEFAULT: 'hsla(var(--button-secondary), <alpha-value>)',
      text: 'hsla(var(--button-secondary-text), <alpha-value>)',
    },
  },
  disabled: {
    DEFAULT: 'hsla(var(--disabled), <alpha-value>)',
  },
  white: {
    DEFAULT: 'hsla(var(--white), <alpha-value>)',
  },
  black: {
    DEFAULT: 'hsla(var(--black), <alpha-value>)',
  },
  blue: {
    DEFAULT: 'hsla(var(--blue), <alpha-value>)',
  },
  darkBlue: {
    DEFAULT: 'hsla(var(--dark-blue), <alpha-value>)',
  },
  lightGrey: {
    DEFAULT: 'hsla(var(--light-grey), <alpha-value>)',
  },
  divider: {
    DEFAULT: 'hsla(var(--divider-primary), <alpha-value>)',
    primary: 'hsla(var(--divider-primary), <alpha-value>)',
    secondary: 'hsla(var(--divider-secondary), <alpha-value>)',
    light: 'hsla(var(--divider-light), <alpha-value>)',
    grey: 'hsla(var(--divider-grey), <alpha-value>)',
    dark: 'hsla(var(--divider-dark), <alpha-value>)',
  },
  error: {
    DEFAULT: 'hsla(var(--error), <alpha-value>)',
  },
  text: {
    primary: 'hsla(var(--text-primary), <alpha-value>)',
    secondary: 'hsla(var(--text-secondary), <alpha-value>)',
    breadcrumbs: 'hsla(var(--text-breadcrumbs), <alpha-value>)',
    buttonsHover: 'hsla(var(--text-buttons-hover), <alpha-value>)',
    buttonsActive: 'hsla(var(--text-buttons-active), <alpha-value>)',
    inputs: 'hsla(var(--text-inputs), <alpha-value>)',
    hover: 'hsla(var(--text-hover), <alpha-value>)',
    white: 'hsla(var(--text-white), <alpha-value>)',
  },
  transparent: 'transparent',
  background: {
    DEFAULT: 'hsla(var(--background-primary), <alpha-value>)',
    primary: 'hsla(var(--background-primary), <alpha-value>)',
    card: 'hsla(var(--background-card), <alpha-value>)',
    icon: 'hsla(var(--background-icon), <alpha-value>)',
    dark: 'hsla(var(--background-dark), <alpha-value>)',
  },
};
