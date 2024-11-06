import { calculateColorFormat } from "../calculateColorFormat";
import { hexToRGB } from "../color-conversion/hexToRgb";
import { hslToHex } from "../color-conversion/hslToHex";
import { offsetColor } from "../offsetColor";
import { ColorFormatType, HslType } from "../types";

export function findTriadic(hex: string): ColorFormatType[] {
  const colorFormat: ColorFormatType = calculateColorFormat(hex);
  const baseColor: HslType = offsetColor(colorFormat);

  const palette: ColorFormatType[] = [];

  for (let i = -2; i <= 2; i++) {
    const hue = (baseColor.h + i * 120 + 360) % 360;
    const lightness =
      i < 0
        ? Math.round(baseColor.l + (4 - i) * (4 - baseColor.l / 25))
        : baseColor.l;

    const newColorHsl = {
      h: hue,
      s: baseColor.s,
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
}
