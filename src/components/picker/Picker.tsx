import { forwardRef, InputHTMLAttributes } from "react";
import { StyleVariantEnum } from "../../utils/types";
import * as S from "./Picker.styles";

export interface PickerProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: StyleVariantEnum;
}

export const Picker = forwardRef<HTMLInputElement, PickerProps>(
  ({ ...props }, ref) => {
    return (
      <S.Container>
        <S.Field type="color" ref={ref} {...props} />
      </S.Container>
    );
  }
);
