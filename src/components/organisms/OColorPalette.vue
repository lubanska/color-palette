<script setup lang="ts">
import MColorBlock from "@/components/molecules/MColorBlock.vue";
import { useColorManager } from "@/composables/useColorManager";

const { currentPalette } = useColorManager();
</script>

<template>
  <div class="h-full flex flex-col md:flex-row">
    <MColorBlock
      v-for="color in currentPalette"
      :key="color.hex"
      :colorObject="color" />
  </div>
</template>

<style lang="scss"></style>
