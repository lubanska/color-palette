import { hideVisually } from "polished";
import styled, { css } from "styled-components";
import { StyleVariantEnum } from "../../utils/types";

export const Container = styled.label<{ variant: StyleVariantEnum }>`
  * {
    ${(props) => {
      switch (props.variant) {
        case StyleVariantEnum.Primary:
          return css`
            border-radius: 5rem;
          `;
        case StyleVariantEnum.Secondary:
          return css`
            border-radius: 0rem;
          `;
      }
    }}
  }
`;

export const Inner = styled.div`
  position: relative;
  border: 1px solid #101233;
  width: 4rem;
  height: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Switch = styled.div`
  border: 1px solid #101233;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  margin: 0.25rem;
  left: 0;
  transition: left 0.3s cubic-bezier(0.64, 0.78, 0.97, 1.06);
`;

export const Field = styled.input`
  ${hideVisually};

  :checked + ${Inner} {
    background-color: #101233;

    ${Switch} {
      background-color: #f3f4f8;
      left: 2rem;
    }
  }
`;
