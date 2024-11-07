<script setup lang="ts">
import MColorBlock from "@/components/molecules/MColorBlock.vue";
import type { ColorFormatType } from "@/types/colorTypes";

interface Props {
  colorArray: ColorFormatType[];
}

defineProps<Props>();
</script>

<template>
  <div class="h-full flex flex-col md:flex-row">
    <MColorBlock
      v-for="color in colorArray"
      :key="color.hex"
      :colorObject="color" />
  </div>
</template>

<style lang="scss"></style>
