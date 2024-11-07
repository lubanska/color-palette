import type { ColorFormatType, HslType } from "@/types/colorTypes";
import { calculateOffsetColor } from "./calculateOffsetColor";
import { hexToRGB } from "./hexToRgb";
import { hslToHex } from "./hslToHex";

export const findTriadic = (color: ColorFormatType): ColorFormatType[] => {
  const baseColor: HslType = calculateOffsetColor(color);

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
};
