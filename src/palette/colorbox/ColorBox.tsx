import * as S from "./ColorBox.styles";

export interface ColorBoxProps {
  color: string;
}

export function ColorBox({ color }: ColorBoxProps) {
  return <S.Container color={color} />;
}
