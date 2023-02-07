import { calculateColorFormat } from "../calculateColorFormat";
import { hexToRGB } from "../color-conversion/hexToRgb";
import { hslToHex } from "../color-conversion/hslToHex";
import { ColorFormatType } from "../types";

export const findMonochromatic = (hex: string): ColorFormatType[] => {
  const colorFormat = calculateColorFormat(hex);
  const offsetWhite = colorFormat.hsl.l > 80 ? 80 : colorFormat.hsl.l;
  const palette: ColorFormatType[] = [];

  for (let i = 0; i <= 4; i++) {
    const lightness = offsetWhite + (4 - i) * 5;
    const newColorHsl = {
      h: colorFormat.hsl.h,
      s: colorFormat.hsl.s,
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
