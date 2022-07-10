import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      menu: string;
      menuActive: string;
      text: string;
      border: string;
      hover: string;
    }
  }
}