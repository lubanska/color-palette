<script setup lang="ts">
import APicker from "@/components/atoms/APicker.vue";
import MRadioGroup from "@/components/molecules/MRadioGroup.vue";
import AButton from "@/components/atoms/AButton.vue";
import { useColorManager } from "@/composables/useColorManager";

const { updatePalette } = useColorManager();

const handleClick = () => {
  updatePalette();
};
</script>

<template>
  <div
    class="border-gray-400 border-solid border-b-1 bg-gray-100 flex flex-row justify-between flex-wrap gap-2 w-full p-3">
    <div class="flex flex-col gap-2 lg:flex-row">
      <AButton icon="lightbulb-outline" @click="handleClick">Generate</AButton>
      <APicker label="Color picker" />
    </div>
    <MRadioGroup />
  </div>
</template>

<style lang="scss"></style>
