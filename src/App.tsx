import { Palette } from "./palette/";
import * as S from "./App.styles";
import { useState } from "react";
import { ColorFormatType } from "./utils/types";
import { findMonochromatic } from "./utils/palette-generators/findMonochromatic";
import { findAnalogous } from "./utils/palette-generators/findAnalogous";
import { findComplementary } from "./utils/palette-generators/findComplementary";
import { findTriadic } from "./utils/palette-generators/findTriadic";

export default function App() {
  const [color, setColor] = useState("#000000");
  const [colorPalette, setColorPalette] = useState<ColorFormatType[]>(
    findMonochromatic(color)
  );

  return (
    <>
      <Palette colorPalette={colorPalette} />
      <S.Picker>
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <S.ButtonContainer>
          <button onClick={() => setColorPalette(findAnalogous(color))}>
            Analogous
          </button>
          <button onClick={() => setColorPalette(findMonochromatic(color))}>
            Monochromatic
          </button>
          <button onClick={() => setColorPalette(findComplementary(color))}>
            Complementary
          </button>
          <button onClick={() => setColorPalette(findTriadic(color))}>
            Triadic
          </button>
        </S.ButtonContainer>
      </S.Picker>
    </>
  );
}
