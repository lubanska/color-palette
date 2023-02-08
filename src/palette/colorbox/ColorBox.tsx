import { ColorFormatType } from "../../utils/types";
import * as S from "./ColorBox.styles";

export interface ColorBoxProps {
  color: ColorFormatType;
}

export function ColorBox({ color }: ColorBoxProps) {
  const { rgb, hsl, hex } = color;

  const isBright = hsl.l > 50;

  return (
    <S.Container color={color.hex} isBright={isBright}>
      <S.Label>{hex}</S.Label>
      <S.Label>
        rgb({rgb.r}, {rgb.g}, {rgb.b})
      </S.Label>
      <S.Label>
        hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
      </S.Label>
    </S.Container>
  );
}
