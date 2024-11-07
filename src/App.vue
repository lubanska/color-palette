<script setup lang="ts">
import ONavigation from "./components/organisms/ONavigation.vue";
import OColorPalette from "./components/organisms/OColorPalette.vue";
import { useColorManager } from "./composables/useColorManager";
import { onMounted } from "vue";

const { selectedColor } = useColorManager();

onMounted(() => {
  document.documentElement.style.setProperty(
    "--color-var",
    selectedColor.value + "80"
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
