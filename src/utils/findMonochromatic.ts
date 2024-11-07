import type { ColorFormatType } from "@/types/colorTypes";
import { hslToHex } from "./hslToHex";
import { hexToRGB } from "./hexToRgb";

export const findMonochromatic = (
  color: ColorFormatType
): ColorFormatType[] => {
  const offsetWhite = color.hsl.l > 80 ? 80 : color.hsl.l;
  const palette: ColorFormatType[] = [];

  for (let i = 0; i <= 4; i++) {
    const lightness = offsetWhite + (4 - i) * 5;
    const newColorHsl = {
      h: color.hsl.h,
      s: color.hsl.s,
      l: lightness,
    };

    const newFormattedColor = {
      hex: hslToHex(newColorHsl),
      rgb: hexToRGB(hslToHex(newColorHsl)),
      hsl: newColorHsl,
    };

    palette.push(newFormattedColor);
  }

  return palette;
};
