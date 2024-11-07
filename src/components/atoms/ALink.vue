<script setup lang="ts">
interface Props {
  to: string;
}

defineProps<Props>();
</script>

<template>
  <a :href="to"><slot /></a>
</template>

<style lang="scss"></style>
