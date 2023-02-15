import styled, { css } from "styled-components";
import { StyleVariantEnum } from "../../utils/types";

export const Container = styled.button<{ variant: StyleVariantEnum }>`
  border: 1px solid #101233;
  padding: 0.5rem 1rem;
  background-color: transparent;
  cursor: pointer;

  ${(props) => {
    switch (props.variant) {
      case StyleVariantEnum.Primary:
        return css`
          border-radius: 2.5rem;
        `;
      case StyleVariantEnum.Secondary:
        return css`
          border-radius: 0rem;
        `;
    }
  }}

  &:hover {
    filter: brightness(5);
  }
`;
