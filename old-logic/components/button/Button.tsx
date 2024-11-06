import { ButtonHTMLAttributes } from "react";
import { StyleVariantEnum } from "../../utils/types";
import * as S from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: StyleVariantEnum;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Container {...props}>{children}</S.Container>;
};
