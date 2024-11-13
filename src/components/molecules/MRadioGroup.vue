<script setup lang="ts">
import ARadioItem from "@/components/atoms/ARadioItem.vue";
import { GenerateMethod } from "@/types/colorTypes";
</script>

<template>
  <div role="radiogroup" class="flex flex-col gap-2 lg:flex-row lg:flex-nowrap">
    <ARadioItem :label="GenerateMethod.ANALOGOUS" group="color" />
    <ARadioItem :label="GenerateMethod.MONOCHROMATIC" group="color" />
    <ARadioItem :label="GenerateMethod.COMPLEMENTARY" group="color" />
    <ARadioItem :label="GenerateMethod.TRIADIC" group="color" />
  </div>
</template>

<style lang="scss"></style>
