import { type Config } from 'tailwindcss/types/config';
import { borderRadius } from './border-radius';
import { boxShadow } from './box-shadow';
import { colors } from './colors';
import { fontFamily } from './font-family';
import { fontSize } from './font-size';
import { letterSpacing } from './letter-spacing';
import { lineHeight } from './line-height';
import { padding } from './padding';

export const theme: Config['theme'] = {
  // colors,
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  // borderRadius,
  extend: {
    boxShadow,
    padding,
  },
  variants: {
    fill: ['hover', 'focus'],
    stroke: ['hover', 'focus'],
  },
  screens: {
    mobile: '375px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
    desktopLarge: '1700px',
  },
};
