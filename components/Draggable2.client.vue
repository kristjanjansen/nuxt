<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
import { Ref } from "vue";
import IconDock from "~icons/radix-icons/chevron-down";

type Props = {
  x: Ref<number>;
  y: Ref<number>;
  docked?: any;
};
const { x, y, docked = false } = defineProps<Props>();
const emit = defineEmits(["update", "dock"]);
const draggable = ref<HTMLElement | null>(null);

const {
  style,
  isDragging,
  x: newX,
  y: newY,
} = useDraggable(draggable, {
  initialValue: { x: x.value, y: y.value },
  // onStart: () => emit("toggleFront"),
  onEnd: () =>
    emit("update", { x: Math.floor(newX.value), y: Math.floor(newY.value) }),
});
</script>

<template>
  <Fade>
    <div
      v-if="!docked.value"
      ref="draggable"
      :style="style"
      class="z-10 w-full cursor-grab touch-none select-none overflow-hidden rounded border border-gray-700 bg-black/80 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
      :class="[
        docked.value ? 'opacity-50' : '',
        isDragging ? 'z-40 cursor-grabbing !border-gray-100' : '',
      ]"
    >
      <div class="relative">
        <button
          class="absolute top-0 right-0 z-50 p-2 text-gray-500 hover:text-gray-100 focus:z-50"
          @click="emit('dock')"
        >
          <IconDock />
        </button>
        <slot />
      </div>
    </div>
  </Fade>
</template>
