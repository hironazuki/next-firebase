import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  // globalに変更する場合
  // styles: {
  //   global: (props) => ({
  //     'html, body': {
  //       bg: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
  //     },
  //   }),
  // },
  colors: {
    clearWhite: 'rgba(245,245,247,0.72)',
    clearBlack: 'rgba(5,5,3,0.2)',
  },
  fonts,
  breakpoints,
})

export default theme;
