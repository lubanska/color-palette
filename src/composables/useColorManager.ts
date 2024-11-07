import { GenerateMethod, type ColorFormatType } from "@/types/colorTypes";
import { calculateRandomColor } from "@/utils/calculateRandomColor";
import { generatePalette } from "@/utils/generatePalette";
import { ref } from "vue";

const selectedColor = ref<string>(calculateRandomColor());
const selectedMethod = ref(GenerateMethod.ANALOGOUS);
const currentPalette = ref<ColorFormatType[]>(
  generatePalette(selectedColor.value, selectedMethod.value)
);

export const useColorManager = () => {
  const setColor = (color: string) => {
    selectedColor.value = color;
    document.documentElement.style.setProperty(
      "--color-var",
      selectedColor.value + "80"
    );
  };

  const setMethod = (method: GenerateMethod) => {
    selectedMethod.value = method;
  };

  const updatePalette = () => {
    currentPalette.value = generatePalette(
      selectedColor.value,
      selectedMethod.value
    );
  };

  return {
    selectedColor,
    selectedMethod,
    currentPalette,
    updatePalette,
    setColor,
    setMethod,
  };
};
