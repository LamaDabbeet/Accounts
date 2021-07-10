import { colors } from './colors';

export const typography = {
  fonts: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    secondary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  colors: {
    light: {
      primary: colors.bigStone,
      secondary: colors.limeGreen,
      interactive: colors.back,
      disabled: colors.back,
      error: colors.back
    },
    dark: {
      primary: colors.solitude,
      secondary: colors.white,
      interactive: colors.back,
      disabled: colors.back,
      error: colors.back
    }
  },
  xsmall: {
    fontSize: '8px',
    lineHeight: 1.1,
    letterSpacing: 0.5
  },
  small: {
    fontSize: '14px',
    lineHeight: 1.1,
    letterSpacing: 0.6,
    fontWeight: 'normal'
  },
  medium: {
    fontSize: '16px',
    lineHeight: 1.1,
    letterSpacing: 0.7
  },
  large: {
    fontSize: '20px',
    lineHeight: 1.1,
    letterSpacing: 0.8
  },
  xlarge: {
    fontSize: '24px',
    lineHeight: 1.1,
    letterSpacing: 0.9
  },
  xxlarge: {
    fontSize: '30px',
    lineHeight: 1.1,
    letterSpacing: 1
  },
  xxxlarge: {
    fontSize: '32px',
    lineHeight: 1.1,
    letterSpacing: 1.1
  },

  weight: {
    regular: 300,
    semibold: 400,
    bold: 800
  }
};