import type { ColorFormatType } from "@/types/colorTypes";
import { hexToRGB } from "./hexToRgb";
import { rgbToHsl } from "./rgbToHsl";

export const calculateColorObject = (hex: string): ColorFormatType => {
  const rgb = hexToRGB(hex);
  const hsl = rgbToHsl(rgb);

  return {
    hex,
    rgb,
    hsl,
  };
};
