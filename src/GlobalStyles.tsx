import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  body {
    background-color: #F3F4F8;
    color: #101233;
    font: 16px/1.5 "Roboto", sans-serif;
  }

  input[type="color"] {
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;

    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 5rem;
      height: 5rem;
    }

    &::-webkit-color-swatch {
      border-radius: 99rem;
      padding: 0;
    }
  }

  button {
    border-radius: 2.5rem;
    border: 1px solid #101233;
    padding: 0.5rem 1rem;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      filter: brightness(5);
    }
  }
  `;
