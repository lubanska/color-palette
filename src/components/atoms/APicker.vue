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
      class="picker__input"
      v-model="selectedColor"
      @input="handleInput" />
    <label :for="label" class="picker__label">
      <div class="picker__box"></div>
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss">
.picker {
  &__input {
    @apply opacity-0 absolute h-1px w-1px;
  }

  &__label {
    @apply py-2 px-3 rounded-xl flex flex-row flex-nowrap gap-2 items-center transition-all duration-300 bg-none active:scale-105 cursor-pointer select-none h-full outline-none;

    &:hover {
      @apply bg-[--color-highlight];
    }
  }

  &__box {
    @apply w-10 h-5 rounded-xl bg-[--color-selected];
  }

  & input[type="color"]:focus-visible + .picker__label {
    @apply outline-offset-1 outline-2 outline-gray-800;
  }
}
</style>
