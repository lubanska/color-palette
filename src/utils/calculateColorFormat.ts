import { hexToRGB } from "./color-conversion/hexToRgb";
import { rgbToHsl } from "./color-conversion/rgbToHsl";
import { ColorFormatType } from "./types";

export function calculateColorFormat(hex: string): ColorFormatType {
  const rgb = hexToRGB(hex);
  const hsl = rgbToHsl(rgb);

  return {
    hex,
    rgb,
    hsl,
  };
}
