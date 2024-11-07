<script setup lang="ts">
import type { ColorFormatType } from "@/types/colorTypes";
import { checkBrightness } from "@/utils/checkBrightness";
import { useNameApi } from "@/composables/useNameApi";
import { computed } from "vue";

interface Props {
  colorObject: ColorFormatType;
}

const props = defineProps<Props>();
const { data } = useNameApi(props.colorObject.hex.slice(1));

const isBright = computed(() => checkBrightness(props.colorObject.rgb));
</script>

<template>
  <div
    class="h-full w-full flex items-end justify-center"
    :style="{ backgroundColor: colorObject.hex }">
    <div
      :class="[
        'm-2 flex gap-2 flex-wrap md:mb-4 md:text-center md:flex-col',
        {
          'text-gray-900': isBright,
          'text-gray-100': !isBright,
        },
      ]">
      <Transition name="fade">
        <p v-if="data" class="whitespace-nowrap">{{ data.name.value }}</p>
      </Transition>
      <p class="font-800 md:text-8">{{ colorObject.hex }}</p>
      <p class="hidden md:block">
        rgb({{ colorObject.rgb.r }}, {{ colorObject.rgb.g }},
        {{ colorObject.rgb.b }})
      </p>
      <p class="hidden md:block">
        hsl({{ colorObject.hsl.h }}, {{ colorObject.hsl.s }}%,
        {{ colorObject.hsl.l }}%)
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
