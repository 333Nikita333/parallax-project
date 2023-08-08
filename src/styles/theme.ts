const theme = {
 paddings: {
    small: '10px',
  },
  colors: {
    primary: '#ffffff',
    text: '#e7e7e0',
  },
  fontSizes: {
    primary: '18px',
    secondary: '24px',
  },
  fontWeights: {
    primary: 400,
    secondary: 900,
  },
};

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
