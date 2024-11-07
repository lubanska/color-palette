import { GenerateMethod } from "@/types/colorTypes";
import { calculateColorObject } from "./calculateColorObject";
import { findAnalogous } from "./findAnalogous";
import { findComplementary } from "./findComplementary";
import { findMonochromatic } from "./findMonochromatic";
import { findTriadic } from "./findTriadic";

export const generatePalette = (color: string, method: GenerateMethod) => {
  const colorObject = calculateColorObject(color);
  const colorPalette = [];

  if (method === GenerateMethod.ANALOGOUS) {
    colorPalette.push(...findAnalogous(colorObject));
  } else if (method === GenerateMethod.MONOCHROMATIC) {
    colorPalette.push(...findMonochromatic(colorObject));
  } else if (method === GenerateMethod.TRIADIC) {
    colorPalette.push(...findTriadic(colorObject));
  } else if (method === GenerateMethod.COMPLEMENTARY) {
    colorPalette.push(...findComplementary(colorObject));
  }

  return colorPalette;
};
