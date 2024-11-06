import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  body {
    background-color: #F3F4F8;
    color: #101233;
    font: 16px/1.5 "Roboto", sans-serif;
  }
  `;
