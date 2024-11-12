<script setup lang="ts">
import ONavigation from "./components/organisms/ONavigation.vue";
import OColorPalette from "./components/organisms/OColorPalette.vue";
import { useColorManager } from "./composables/useColorManager";
import { onMounted } from "vue";

const { selectedColor } = useColorManager();

onMounted(() => {
  document.documentElement.style.setProperty(
    "--color-highlight",
    selectedColor.value + "80"
  );
  document.documentElement.style.setProperty(
    "--color-selected",
    selectedColor.value
  );
});
</script>

<template>
  <main id="main-container" class="h-100vh overflow-hidden flex flex-col">
    <ONavigation />
    <OColorPalette />
  </main>

  <!-- <footer>
    Created with ♡ by
    <ALink to="https://lubanska.dev">Agata</ALink>
  </footer> -->
</template>
