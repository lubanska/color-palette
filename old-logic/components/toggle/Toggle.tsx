import { forwardRef, InputHTMLAttributes } from "react";
import { StyleVariantEnum } from "../../utils/types";
import * as S from "./Toggle.styles";

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: StyleVariantEnum;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ variant, ...props }, ref) => {
    return (
      <S.Container variant={variant}>
        <S.Field ref={ref} {...props} />
        <S.Inner>
          <S.Switch />
        </S.Inner>
      </S.Container>
    );
  }
);
