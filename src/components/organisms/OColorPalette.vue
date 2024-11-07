<script setup lang="ts">
import MColorBlock from "@/components/molecules/MColorBlock.vue";

const colorArray = ["#FF0000", "#00FF00", "#0000FF", "#00FF00", "#0000FF"];
</script>

<template>
  <div class="h-100vh flex flex-col md:flex-row">
    <MColorBlock v-for="color in colorArray" :key="color" :bgColor="color" />
  </div>
</template>

<style lang="scss"></style>
