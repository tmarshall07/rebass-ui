// import getColors, { Scheme } from './colors';

type ThemeType = {
  fontSizes: number[];
  space: number[];
  fontWeights: { [index: string]: number };
  shadows: { [index: string]: string };
};

export const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  // fonts: {},
  fontWeights: {
    bold: 700,
  },
  // lineHeights: {},
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: 'rgb(6 26 54 / 6%) 0px 4px 12px;',
  },
  // link: {},
  // text: {},
  //   buttons: {},
  // variants: {},
};

export default theme;
