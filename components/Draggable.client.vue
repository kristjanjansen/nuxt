<script setup lang="ts">
import {
  useDraggable,
  useIdle,
  useTimeoutFn,
  useWindowSize,
} from "@vueuse/core";
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
  titles: string[];
};
const {
  x,
  y,
  updateXY,
  getDocked,
  setDocked,
  getIndex,
  dockable = true,
  titles = undefined,
} = defineProps<Props>();

const draggable = ref<HTMLElement | null>(null);
const { height } = useWindowSize();
const {
  isDragging,
  x: newX,
  y: newY,
} = useDraggable(draggable, {
  initialValue: { x: x.value, y: y.value },
  onEnd: () => {
    newY.value =
      newY.value < 0
        ? 0
        : newY.value >= height.value - 64
        ? height.value - 64
        : newY.value;
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
    zIndex: isDragging.value ? "100" : getIndex() + 10, // z 10 is top nav
  };
});
const { idle } = useIdle(5000);
const { lang } = useLang();
</script>

<template>
  <FadeTransition>
    <div
      ref="draggable"
      v-show="!getDocked()"
      :style="style"
      class="debug w-full cursor-grab touch-none select-none overflow-hidden border border-gray-700 bg-black/70 backdrop-blur-lg transition-colors md:fixed md:w-fit"
      :class="[isDragging ? '!md:border-gray-100 md:cursor-grabbing' : '']"
    >
      <div class="px-2 font-mono text-xs uppercase tracking-wide">
        {{ titles[lang] }}
      </div>
      <div>
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
      <slot name="undraggable" />
    </div>
  </FadeTransition>
</template>
