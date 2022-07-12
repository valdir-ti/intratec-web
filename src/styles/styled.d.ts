import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      text: string;
      secondText: string;
      background: string;
      secondBackground: string;
      menu: string;
      menuActive: string;
      border: string;
      hover: string;
      logo: string;
      menuIcon: string;
      navbar: string;
    }
  }
}