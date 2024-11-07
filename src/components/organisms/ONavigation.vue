<script setup lang="ts">
import APicker from "@/components/atoms/APicker.vue";
import MRadioGroup from "@/components/molecules/MRadioGroup.vue";
import AButton from "@/components/atoms/AButton.vue";
</script>

<template>
  <div
    class="border-gray-400 border-solid border-b-1 bg-gray-100 flex flex-row justify-end flex-wrap gap-4 absolute w-full p-3">
    <AButton icon="lightbulb-outline">Generate</AButton>
    <APicker label="Color picker" />
    <MRadioGroup />
  </div>
</template>

<style lang="scss"></style>
