<script setup lang="ts">
interface Props {
  icon?: string;
}

defineProps<Props>();
</script>

<template>
  <button
    class="py-2 px-3 rounded-xl flex flex-row flex-nowrap gap-2 items-center transition-all duration-300 bg-none hover:bg-[--color-highlight] active:scale-105 outline-none focus-visible:outline-offset-1 focus-visible:outline-2 focus-visible:outline-gray-800">
    <i
      v-if="icon"
      :class="`i-mdi:${icon} w-4 h-4 border-solid border-1 border-black`"></i>
    <slot />
  </button>
</template>

<style lang="scss">
button {
  &:-moz-focusring {
    @apply outline-none;
  }
}
</style>
