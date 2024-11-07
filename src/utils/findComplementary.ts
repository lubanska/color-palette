import type { ColorFormatType, HslType } from "@/types/colorTypes";
import { calculateOffsetColor } from "./calculateOffsetColor";
import { hexToRGB } from "./hexToRgb";
import { hslToHex } from "./hslToHex";

export const findComplementary = (
  color: ColorFormatType
): ColorFormatType[] => {
  const baseColor: HslType = calculateOffsetColor(color);

  const palette: ColorFormatType[] = [];

  for (let i = -2; i <= 2; i++) {
    const hue = (baseColor.h + i * 60 + 360) % 360;
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
};
