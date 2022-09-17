<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { useDraggable, useIdle, useTimeoutFn } from "@vueuse/core";
import { Ref } from "vue";
import IconDock from "~icons/radix-icons/minus";

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
      class="group relative w-full overflow-hidden border border-gray-800 bg-black/70 backdrop-blur-lg transition-colors md:fixed md:w-fit"
      :class="[isDragging ? 'md:cursor-grabbing' : '']"
    >
      <div v-bind="$attrs">
        <slot />
      </div>
      <div
        ref="draggable"
        class="absolute top-0 left-0 right-0 flex h-7 cursor-grab select-none items-center justify-between bg-black/80 px-2 transition hover:!bg-gray-800"
        :class="[!idle ? '' : '']"
      >
        <FadeTransition>
          <div
            v-if="!idle"
            class="font-mono text-xs uppercase tracking-wide text-gray-300"
          >
            Hello world
          </div>
        </FadeTransition>
        <FadeTransition>
          <button
            v-if="dockable && !idle"
            class="text-gray-500 hover:text-gray-100 focus:z-50"
            @click="() => setDocked()"
          >
            <IconDock />
          </button>
        </FadeTransition>
      </div>
    </div>
  </FadeTransition>
</template>
