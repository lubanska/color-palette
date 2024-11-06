<script setup lang="ts">
import ONavigation from "./components/organisms/ONavigation.vue";
import OColorPalette from "./components/organisms/OColorPalette.vue";
</script>

<template>
  <header><ONavigation /></header>

  <main>
    <OColorPalette />
  </main>

  <footer>
    Created with ♡ by
    <ALink to="https://lubanska.dev">Agata</ALink>
  </footer>
</template>
