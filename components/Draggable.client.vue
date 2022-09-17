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
  title?: string;
  dockable?: boolean;
  fullheight?: boolean;
};
const {
  x,
  y,
  updateXY,
  getDocked,
  setDocked,
  getIndex,
  dockable = true,
  fullheight = false,
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
      class="relative w-full overflow-hidden border border-gray-800 bg-black/70 backdrop-blur-lg transition-colors md:fixed md:w-fit"
      :class="[isDragging ? 'md:cursor-grabbing' : '']"
    >
      <div
        ref="draggable"
        class="flex h-7 cursor-grab select-none items-center justify-between px-2 transition"
        :class="[
          fullheight ? 'absolute top-0 left-0 right-0 z-[1000]' : '',
          !idle ? 'hover:bg-white/10' : '',
        ]"
      >
        <FadeTransition>
          <div
            v-if="!idle"
            class="font-mono text-xs uppercase tracking-wide text-gray-300"
          >
            Stream
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
      <div v-bind="$attrs">
        <slot />
      </div>
    </div>
  </FadeTransition>
</template>
