import { Size } from '.';

export type TFontSizes = Size | string;
export const fontSizes: TFontSizes = {
  extraSmall: '0.875rem',
  small: '1.125rem',
  medium: '1.5rem',
  large: '1.875rem',
  extraLarge: '2.25rem',
};

export type TFontFamilies = {
  primary: string;
  secondary: string;
  code: string;
  heading: string;
  icon: string;
};
export const fontFamilies: TFontFamilies = {
  primary: 'Roboto, sans-serif',
  secondary: 'Roboto Mono, monospace',
  code: 'Roboto Mono, monospace',
  heading: 'Roboto, sans-serif',
  icon: 'Material Icons',
};

export type TWeights =
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type TFontWeights = {
  [key in TWeights]: number;
};
export const fontWeights: Record<string, TWeights> = {
  normal: 400,
  bold: 700,
  bolder: 800,
  lighter: 300,
  100: 100,
  200: 200,
  300: 300,
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
  900: 900,
};

export const lineHeights: Record<string, number> = {
  small: 1.2,
  medium: 1.4,
  large: 1.6,
};

export const letterSpacings: Record<string, string> = {
  tight: '-0.05em',
  normal: '0',
  wide: '0.05em',
};
