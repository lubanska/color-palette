import type { ColorFormatType, HslType } from "@/types/colorTypes";
import { hslToHex } from "./hslToHex";
import { hexToRGB } from "./hexToRgb";
import { calculateOffsetColor } from "./calculateOffsetColor";

export const findAnalogous = (color: ColorFormatType): ColorFormatType[] => {
  const baseColor: HslType = calculateOffsetColor(color);

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
};
