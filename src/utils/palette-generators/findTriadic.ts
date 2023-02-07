import { calculateColorFormat } from "../calculateColorFormat";
import { hexToRGB } from "../color-conversion/hexToRgb";
import { hslToHex } from "../color-conversion/hslToHex";
import { ColorFormatType } from "../types";

export const findTriadic = (hex: string): ColorFormatType[] => {
  const colorFormat = calculateColorFormat(hex);

  const palette: ColorFormatType[] = [];

  for (let i = -2; i <= 2; i++) {
    const hue = (colorFormat.hsl.h + i * 120 + 360) % 360;
    const lightness =
      i < 0 ? colorFormat.hsl.l + (4 - i) * 5 : colorFormat.hsl.l;

    const newColorHsl = {
      h: hue,
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
