import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  maxWidth: 1300     ,
  fonts: {
    open_sans: "Open Sans",
    poppins: "Poppins",
  },
  colors: {
    spinnerBase: "#0000ff",

    black: "#000000",
    white: "#ffffff",

    purple_primary: "#000744",
    blue_primary: "#10548f",
    blue_second: "#6797cc",

    gray_primary: "#0000007f",
    red_primary: "#ee4141",
    green_primary: "#3cc74a",
    white_primary: "#ffffffcc",
    
  },
  breakpoints: {
    mobile: "320px",
    mobile_sm: "375px",
    mobile_md: "420px",
    tablet: "480px",
    tablet_sm: "570px",
    tablet_md: "660px",
    laptop: "768px",
    desktop: "1024px",
    desktop_lg: "1280px",
    desktop_ml: "1440px",
    desktop_xl: "1920px",
  },
  zIndexes: {
    headerBar: 100,
    text: 20,
    main_layout: 80,
    footer_layout: 70,
    hover_mask: 10,
    full_menu: 90,
  },
  margins: {
    primary: 25,
    secondary: 15,
  },
};

export default theme;
