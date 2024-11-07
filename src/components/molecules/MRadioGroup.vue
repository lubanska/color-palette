<script setup lang="ts">
import ARadioItem from "@/components/atoms/ARadioItem.vue";
import { GenerateMethod } from "@/types/colorTypes";
</script>

<template>
  <div
    role="radiogroup"
    class="box-border flex flex-row gap-2 flex-wrap md:flex-nowrap">
    <ARadioItem :label="GenerateMethod.ANALOGOUS" group="color" />
    <ARadioItem :label="GenerateMethod.MONOCHROMATIC" group="color" />
    <ARadioItem :label="GenerateMethod.COMPLEMENTARY" group="color" />
    <ARadioItem :label="GenerateMethod.TRIADIC" group="color" />
  </div>
</template>

<style lang="scss"></style>
