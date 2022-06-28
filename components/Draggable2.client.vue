<script setup lang="ts">
import { useDraggable, useTimeoutFn } from "@vueuse/core";
import { Ref } from "vue";
import IconDock from "~icons/radix-icons/chevron-down";

type Props = {
  x: Ref<number>;
  y: Ref<number>;
  docked?: any;
  index: Function;
  update: Function;
  dock: Function;
};
const { x, y, docked = false, index, update, dock } = defineProps<Props>();
const draggable = ref<HTMLElement | null>(null);

const {
  isDragging,
  x: newX,
  y: newY,
} = useDraggable(draggable, {
  initialValue: { x: x.value, y: y.value },
  onEnd: async () => {
    useTimeoutFn(
      () =>
        update({
          x: Math.floor(newX.value),
          y: Math.floor(newY.value),
        }),
      0
    );
  },
});
const style = computed(() => {
  return {
    top: `${newY.value}px`,
    left: `${newX.value}px`,
    zIndex: isDragging.value ? "100" : index(),
  };
});
</script>

<template>
  <Fade>
    <div
      v-if="!docked.value"
      ref="draggable"
      :style="style"
      class="w-full cursor-grab touch-none select-none overflow-hidden rounded border border-gray-700 bg-black/80 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
      :class="[
        docked.value ? 'opacity-50' : '',
        isDragging ? 'cursor-grabbing !border-gray-100' : '',
      ]"
    >
      <div class="relative">
        <button
          class="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-100 focus:z-50"
          @click="() => dock()"
        >
          <IconDock />
        </button>

        <slot />
      </div>
    </div>
  </Fade>
</template>
