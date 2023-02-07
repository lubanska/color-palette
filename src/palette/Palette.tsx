import { ColorFormatType } from "../utils/types";
import { ColorBox } from "./colorbox";
import * as S from "./Palette.styles";

export interface PaletteProps {
  colorPalette: ColorFormatType[];
}

export function Palette({ colorPalette }: PaletteProps) {
  return (
    <S.Container>
      {colorPalette.map((color, i) => (
        <ColorBox key={i} color={color.hex} />
      ))}
    </S.Container>
  );
}
