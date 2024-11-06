<script setup lang="ts">
import ARadioItem from "@/components/atoms/ARadioItem.vue";
</script>

<template>
  <div class="flex flex-row">
    <ARadioItem radioId="analogous" label="Select analogous">
      Analogous
    </ARadioItem>
    <ARadioItem radioId="monochromatic" label="Select monochromatic">
      Monochromatic
    </ARadioItem>
    <ARadioItem radioId="complementary" label="Select complementary">
      Complementary
    </ARadioItem>
    <ARadioItem radioId="triadic" label="Select triadic">Triadic</ARadioItem>
  </div>
</template>

<style lang="scss"></style>
