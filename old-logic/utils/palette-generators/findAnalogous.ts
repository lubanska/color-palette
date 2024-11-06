import { calculateColorFormat } from "../calculateColorFormat";
import { hexToRGB } from "../color-conversion/hexToRgb";
import { hslToHex } from "../color-conversion/hslToHex";
import { offsetColor } from "../offsetColor";
import { ColorFormatType, HslType } from "../types";

export function findAnalogous(hex: string): ColorFormatType[] {
  const colorFormat: ColorFormatType = calculateColorFormat(hex);
  const baseColor: HslType = offsetColor(colorFormat);

  const palette: ColorFormatType[] = [];

  for (let i = 0; i <= 4; i++) {
    const hue = (baseColor.h + i * 30 + 360) % 360;
    const newColorHsl = {
      h: hue,
      s: baseColor.s,
      l: baseColor.l,
    };

    const newFormattedColor = {
      hex: hslToHex(newColorHsl),
      rgb: hexToRGB(hslToHex(newColorHsl)),
      hsl: newColorHsl,
    };

    palette.push(newFormattedColor);
  }

  return palette;
}
