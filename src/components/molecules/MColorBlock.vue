<script setup lang="ts">
interface Props {
  bgColor: string;
}

defineProps<Props>();
</script>

<template>
  <div class="h-full w-full" :style="{ backgroundColor: bgColor }">
    <slot />
  </div>
</template>

<style lang="scss"></style>
