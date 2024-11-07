<script setup lang="ts">
import ONavigation from "./components/organisms/ONavigation.vue";
import OColorPalette from "./components/organisms/OColorPalette.vue";
import type { ColorFormatType } from "./types/colorTypes";

const colorArray: ColorFormatType[] = [
  { hex: "#FF0000", rgb: { r: 255, g: 0, b: 0 }, hsl: { h: 0, s: 100, l: 50 } },
  {
    hex: "#00FF00",
    rgb: { r: 0, g: 255, b: 0 },
    hsl: { h: 120, s: 100, l: 50 },
  },
  {
    hex: "#0000FF",
    rgb: { r: 0, g: 0, b: 255 },
    hsl: { h: 240, s: 100, l: 50 },
  },
  {
    hex: "#00FF00",
    rgb: { r: 0, g: 255, b: 0 },
    hsl: { h: 120, s: 100, l: 50 },
  },
  {
    hex: "#0000FF",
    rgb: { r: 0, g: 0, b: 255 },
    hsl: { h: 240, s: 100, l: 50 },
  },
];
</script>

<template>
  <main class="h-100vh overflow-hidden flex flex-col">
    <ONavigation />
    <OColorPalette :colorArray="colorArray" />
  </main>

  <!-- <footer>
    Created with ♡ by
    <ALink to="https://lubanska.dev">Agata</ALink>
  </footer> -->
</template>
