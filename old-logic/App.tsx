import { Palette } from "./palette/";
import * as S from "./App.styles";
import { useState } from "react";
import { ColorFormatType, StyleVariantEnum } from "./utils/types";
import { findMonochromatic } from "./utils/palette-generators/findMonochromatic";
import { findAnalogous } from "./utils/palette-generators/findAnalogous";
import { findComplementary } from "./utils/palette-generators/findComplementary";
import { findTriadic } from "./utils/palette-generators/findTriadic";
import { Picker } from "./components/picker";
import { Button } from "./components/button";
import { Toggle } from "./components/toggle";

export default function App() {
  const [color, setColor] = useState<string>("#000000");
  const [variant, setVariant] = useState<StyleVariantEnum>(
    StyleVariantEnum.Primary
  );
  const [colorPalette, setColorPalette] = useState<ColorFormatType[]>(
    findMonochromatic(color)
  );

  return (
    <>
      <Palette colorPalette={colorPalette} />
      <S.Picker>
        <Toggle
          type="checkbox"
          variant={variant}
          onChange={() =>
            variant === StyleVariantEnum.Primary
              ? setVariant(StyleVariantEnum.Secondary)
              : setVariant(StyleVariantEnum.Primary)
          }
        />
        <Picker
          value={color}
          variant={variant}
          onChange={(e) => setColor(e.target.value)}
        />
        <S.ButtonContainer>
          <Button
            variant={variant}
            onClick={() => setColorPalette(findAnalogous(color))}
          >
            Analogous
          </Button>
          <Button
            variant={variant}
            onClick={() => setColorPalette(findMonochromatic(color))}
          >
            Monochromatic
          </Button>
          <Button
            variant={variant}
            onClick={() => setColorPalette(findComplementary(color))}
          >
            Complementary
          </Button>
          <Button
            variant={variant}
            onClick={() => setColorPalette(findTriadic(color))}
          >
            Triadic
          </Button>
        </S.ButtonContainer>
      </S.Picker>
    </>
  );
}
