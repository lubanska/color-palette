import { type ColorFormatType } from "@/types/colorTypes";
import { generatePalette } from "@/utils/generatePalette";
import { computed, ref } from "vue";

export const useColorManager = () => {
  const selectedColor = ref<string>("#000000");
  const selectedMethod = ref("Monochromatic");
  const currentPalette = computed<ColorFormatType[]>(() => {
    return generatePalette(selectedColor.value, selectedMethod.value);
  });

  const setColor = (color: string) => {
    selectedColor.value = color;
  };

  return { selectedColor, currentPalette, setColor };
};
