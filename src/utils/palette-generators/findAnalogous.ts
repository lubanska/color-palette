import { calculateColorFormat } from "../calculateColorFormat";
import { hexToRGB } from "../color-conversion/hexToRgb";
import { hslToHex } from "../color-conversion/hslToHex";
import { ColorFormatType } from "../types";

export const findAnalogous = (hex: string): ColorFormatType[] => {
  const colorFormat = calculateColorFormat(hex);

  const palette: ColorFormatType[] = [];

  for (let i = 0; i <= 4; i++) {
    const hue = (colorFormat.hsl.h + i * 30 + 360) % 360;
    const newColorHsl = {
      h: hue,
      s: colorFormat.hsl.s,
      l: colorFormat.hsl.l,
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
