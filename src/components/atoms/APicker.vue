<script setup lang="ts">
import { useColorManager } from "@/composables/useColorManager";

interface Props {
  label: string;
}

defineProps<Props>();

const { selectedColor, setColor } = useColorManager();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  setColor(target.value);
};
</script>

<template>
  <div class="picker">
    <input
      type="color"
      :id="label"
      :name="label"
      v-model="selectedColor"
      @input="handleInput" />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<style lang="scss">
.picker {
  @apply py-2 px-3 rounded-xl flex flex-row flex-nowrap gap-2 items-center transition-all duration-300 bg-none active:scale-105 hover:bg-gray-300 cursor-pointer;

  & input {
    @apply bg-transparent;

    &::-webkit-color-swatch {
      @apply border-none rounded-xl cursor-pointer;
    }

    &::-moz-color-swatch {
      @apply border-none rounded-xl cursor-pointer;
    }
  }

  & label {
    @apply cursor-pointer select-none whitespace-nowrap;
  }
}
</style>
