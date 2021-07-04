import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      DARK_GREY: string;
      LIGHT_GREY: string;
      LIGHT_BLUE: string;
      DARK_BLUE: string;
      WHITE: string;
    };
  }
}
