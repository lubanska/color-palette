import type { RgbType } from "@/types/colorTypes";

export const hexToRGB = (hex: string): RgbType => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) return { r: 0, g: 0, b: 0 };

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return {
    r,
    g,
    b,
  };
};
