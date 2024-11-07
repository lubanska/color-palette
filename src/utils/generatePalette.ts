import { calculateColorObject } from "./calculateColorObject";
import { findAnalogous } from "./findAnalogous";
import { findComplementary } from "./findComplementary";
import { findMonochromatic } from "./findMonochromatic";
import { findTriadic } from "./findTriadic";

export const generatePalette = (color: string, method: string) => {
  const colorObject = calculateColorObject(color);
  const colorPalette = [];

  if (method === "Analogous") {
    colorPalette.push(...findAnalogous(colorObject));
  } else if (method === "Monochromatic") {
    colorPalette.push(...findMonochromatic(colorObject));
  } else if (method === "Triad") {
    colorPalette.push(...findTriadic(colorObject));
  } else if (method === "Complementary") {
    colorPalette.push(...findComplementary(colorObject));
  }

  return colorPalette;
};
