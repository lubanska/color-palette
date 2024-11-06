<script setup lang="ts">
import APicker from "@/components/atoms/APicker.vue";
import MRadioGroup from "@/components/molecules/MRadioGroup.vue";
import AButton from "@/components/atoms/AButton.vue";
</script>

<template>
  <div class="border-gray border-solid border-b-1 flex flex-row">
    <APicker />
    <MRadioGroup />
    <AButton>Generate</AButton>
  </div>
</template>

<style lang="scss"></style>
