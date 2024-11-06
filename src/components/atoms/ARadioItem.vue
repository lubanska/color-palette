<script setup lang="ts">
interface Props {
  radioId: string;
  label: string;
}

defineProps<Props>();
</script>

<template>
  <input type="radio" :id="radioId" name="color" value="email" />
  <label :for="radioId">{{ label }}</label>
</template>

<style lang="scss"></style>
