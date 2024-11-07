<script setup lang="ts">
interface Props {
  icon?: string;
}

defineProps<Props>();
</script>

<template>
  <button
    class="py-2 px-3 rounded-xl flex flex-row flex-nowrap gap-2 items-center transition-all duration-300 bg-none hover:bg-gray-300 active:scale-105">
    <i
      v-if="icon"
      :class="`i-mdi:${icon} w-4 h-4 border-solid border-1 border-black`"></i>
    <slot />
  </button>
</template>

<style lang="scss"></style>
