<script setup lang="ts">
import { useColorManager } from "@/composables/useColorManager";
import type { GenerateMethod } from "@/types/colorTypes";

interface Props {
  label: string;
  group: string;
}

defineProps<Props>();

const { selectedMethod, setMethod } = useColorManager();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  setMethod(target.value as GenerateMethod);
};
</script>

<template>
  <div class="radio">
    <input
      type="radio"
      :id="label"
      :name="group"
      :value="label"
      :aria-labelledby="`${label}-label`"
      class="radio__input"
      v-model="selectedMethod"
      @input="handleInput" />
    <label
      :for="label"
      :aria-labelledby="`${label}-label`"
      class="radio__label">
      <div class="radio__circle"></div>
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss">
.radio {
  &__input {
    @apply opacity-0 absolute;
  }

  &__label {
    @apply py-2 px-3 rounded-xl flex flex-row flex-nowrap gap-2 items-center transition-all duration-300 bg-none active:scale-105 cursor-pointer select-none h-full outline-none;

    &:hover {
      @apply bg-[--color-highlight];

      & .radio__circle {
        @apply border-gray-700;

        &:before {
          @apply bg-gray-400;
        }
      }
    }
  }

  &__circle {
    @apply w-5 h-5 border-1 border-gray-500 rounded-full relative transition-all duration-300;

    &:before {
      @apply content-[''] rounded-full w-3 h-3 top-1/2 left-1/2 translate-x--1/2 translate-y--1/2 absolute transition-all duration-300;
    }
  }

  & input[type="radio"]:checked + .radio__label .radio__circle {
    @apply border-gray-700;

    &:before {
      @apply bg-gray-700;
    }
  }

  & input[type="radio"]:focus-visible + .radio__label {
    @apply outline-offset-1 outline-2 outline-gray-800;
  }
}
</style>
