import styled, { css } from "styled-components";
import { StyleVariantEnum } from "../../utils/types";

export const Container = styled.label``;

export const Field = styled.input<{ variant: StyleVariantEnum }>`
  border: none;
  width: auto;
  height: auto;
  background: none;
  cursor: pointer;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
    width: 5rem;
    height: 5rem;
  }

  &::-webkit-color-swatch {
    padding: 0;

    ${(props) => {
      switch (props.variant) {
        case StyleVariantEnum.Primary:
          return css`
            border-radius: 99rem;
          `;
        case StyleVariantEnum.Secondary:
          return css`
            border-radius: 0rem;
          `;
      }
    }}
  }
`;
