import { lighten, darken } from 'polished';

export type Scheme = 'light' | 'dark';

export type Color =
  | 'text'
  | 'bg-0'
  | 'bg-2'
  | 'bg-3'
  | 'primary'
  | 'primaryText'
  | 'gray5'
  | 'gray10'
  | 'gray20'
  | 'gray30'
  | 'gray40'
  | 'gray50'
  | 'textInvert'
  | 'negative'
  | 'warning'
  | 'positive'
  | 'negativeLight'
  | 'white';

const primary = '#004E96';
const dark = '#282C30';
const light = '#F8F8F8';
const negative = '#C23C3C';
const warning = '#E18C5C';
const positive = '#31aa31';
const white = '#ffffff';

export type ColorsProps = { [index: string]: string };

type SchemeType = {
  dark: ColorsProps;
  light: ColorsProps;
};

export const lightScheme = {
  text: dark,
  textInvert: light,
  primary,
  primaryText: darken(0.1, primary),
  'bg-0': lighten(0.05, light),
  'bg-1': light,
  'bg-2': darken(0.05, light),
  'bg-3': darken(0.1, light),
  gray5: darken(0.05, light),
  gray10: darken(0.1, light),
  gray15: darken(0.5, light),
  gray20: darken(0.2, light),
  gray30: darken(0.3, light),
  gray40: darken(0.4, light),
  gray50: darken(0.5, light),
  gray60: darken(0.6, light),
  gray70: darken(0.7, light),
  gray80: darken(0.8, light),
  gray90: darken(0.9, light),
  negative,
  negativeLight: lighten(0.3, negative),
  warning,
  positive,
  white,
};

export const schemes: SchemeType = {
  light: lightScheme,

  dark: {
    text: light,
    textInvert: dark,
    primary: lighten(0.3, primary),
    primaryText: lighten(0.4, primary),
    'bg-0': darken(0.05, dark),
    'bg-1': dark,
    'bg-2': lighten(0.05, dark),
    'bg-3': lighten(0.1, dark),
    gray5: lighten(0.05, dark),
    gray10: lighten(0.1, dark),
    gray15: lighten(0.15, dark),
    gray20: lighten(0.2, dark),
    gray30: lighten(0.3, dark),
    gray40: lighten(0.4, dark),
    gray50: lighten(0.5, dark),
    gray60: lighten(0.6, dark),
    gray70: lighten(0.7, dark),
    gray80: lighten(0.8, dark),
    gray90: lighten(0.9, dark),
    negative: lighten(0.2, negative),
    negativeLight: lighten(0.3, negative),
    warning: lighten(0.15, warning),
    positive: lighten(0.3, positive),
    white,
  },
};

export function isColor(s: string): s is Color {
  return !!schemes.dark[s] && !!schemes.light[s];
}

export const getColors = (scheme: Scheme = 'dark'): ColorsProps => schemes[scheme];

export const getColor = (scheme: Scheme = 'dark', key: string): string => schemes[scheme]?.[key] || '';

export default getColors;
