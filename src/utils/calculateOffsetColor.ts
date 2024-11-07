import type { ColorFormatType, HslType, RgbType } from "@/types/colorTypes";
import { rgbToHsl } from "./rgbToHsl";

export const calculateOffsetColor = (colorFormat: ColorFormatType): HslType => {
  const { r, g, b } = colorFormat.rgb;

  const isHueVisible =
    Math.abs(r - g) < 5 && Math.abs(g - b) < 5 && Math.abs(r - b) < 5;

  if (isHueVisible) {
    const keys = Object.keys(colorFormat.rgb);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const newValue = colorFormat.rgb[randomKey as keyof RgbType];
    const offset = newValue > 230 ? -25 : 25;

    const newColorRgb: RgbType = {
      ...colorFormat.rgb,
      [randomKey]: newValue + offset,
    };

    return rgbToHsl(newColorRgb);
  } else {
    return colorFormat.hsl;
  }
};
