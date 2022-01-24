import { createGlobalStyle } from "styled-components";
import { LIGHT_FONT_WEIGHT } from "./constants";

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Titillium Web", sans-serif;
    line-height: 100%;
    font-weight: ${LIGHT_FONT_WEIGHT};
    color: #f1f1f1;

  }
`;

export default GlobalStyle;
