import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    maxWidth: number;
    fonts: {
      roboto_condensend: string;
    };

    colors: {
      spinnerBase: string;
      
      black: string;
      white: string;

      purple_primary: string;

      blue_primary: string;
      blue_second: string;
      blue_third: string;
      
      gray_primary: string;
      red_primary: string;
      green_primary: string;
      white_primary: string;
    };

    breakpoints: {
      mobile: string;
      mobile_sm: string;
      mobile_md: string;
      tablet: string;
      tablet_md: string;
      tablet_sm: string;
      laptop: string;
      desktop: string;
      desktop_lg: string;
      desktop_ml: string;
      desktop_xl: string;
    };

    zIndexes: {
      headerBar: number;
      text: number;
      hover_mask: number;
      full_menu: number;
      main_layout: number;
      footer_layout: number;
    };

    margins: {
      primary: number;
      secondary: number;
    };
  }
}