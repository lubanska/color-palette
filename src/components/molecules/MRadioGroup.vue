<script setup lang="ts">
import ARadioItem from "@/components/atoms/ARadioItem.vue";
</script>

<template>
  <div
    role="radio-group"
    class="box-border flex flex-row gap-2 flex-wrap md:flex-nowrap">
    <ARadioItem label="Analogous" group="color" />
    <ARadioItem label="Monochromatic" group="color" />
    <ARadioItem label="Complementary" group="color" />
    <ARadioItem label="Triadic" group="color" />
  </div>
</template>

<style lang="scss"></style>
