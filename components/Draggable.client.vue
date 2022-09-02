<script setup lang="ts">
import { useDraggable, useIdle, useTimeoutFn } from "@vueuse/core";
import { Ref } from "vue";
import IconDock from "~icons/radix-icons/chevron-down";

type Props = {
  x: Ref<number>;
  y: Ref<number>;
  updateXY: Function;
  getDocked: Function;
  setDocked: Function;
  getIndex: Function;
  dockable?: boolean;
};
const {
  x,
  y,
  updateXY,
  getDocked,
  setDocked,
  getIndex,
  dockable = true,
} = defineProps<Props>();
const draggable = ref<HTMLElement | null>(null);

const {
  isDragging,
  x: newX,
  y: newY,
} = useDraggable(draggable, {
  initialValue: { x: x.value, y: y.value },
  onEnd: () => {
    useTimeoutFn(
      () =>
        updateXY({
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
    zIndex: isDragging.value ? "100" : getIndex(),
  };
});
const { idle } = useIdle(5000);
</script>

<template>
  <FadeTransition>
    <div
      v-show="!getDocked()"
      :style="style"
      class="w-full cursor-grab touch-none select-none overflow-hidden border border-gray-700 bg-black/70 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
      :class="[
        getDocked() ? 'opacity-50' : '',
        isDragging ? '!md:border-gray-100 md:cursor-grabbing' : '',
      ]"
    >
      <div ref="draggable">
        <div class="relative">
          <FadeTransition>
            <button
              v-if="dockable && !idle"
              class="absolute top-0 right-0 z-[100] p-1 text-gray-500 hover:text-gray-100 focus:z-50"
              @click="() => setDocked()"
            >
              <IconDock />
            </button>
          </FadeTransition>
          <slot />
        </div>
      </div>
      <slot name="nodrag" />
    </div>
  </FadeTransition>
</template>
