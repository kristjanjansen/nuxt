<script setup lang="ts">
import {
  useElementSize,
  useMediaControls,
  useMouseInElement,
} from "@vueuse/core";
import { scaleLinear, scaleTime, svg } from "d3";
import { container } from "webpack";

type Props = {
  data: any;
  username?: string;
};
const { data, username = null } = defineProps<Props>();

const useScrubber = (container, svg) => {
  const { width } = useElementSize(container);
  const height = ref(50);

  const { elementX: scrubX } = useMouseInElement(svg);

  //  const { currentTime, duration } = useMediaControls(video);

  // const xVideoScale = computed(() =>
  //   scaleLinear().domain([0, duration.value]).range([0, width.value])
  // );

  const currentX = ref(null);
  const currentTime = ref(null);

  const scrubbing = ref(false);

  const onScrub = () => {
    currentX.value = scrubX.value;
    currentTime.value = xScale.value.invert(scrubX.value);
  };

  const onMousedown = () => {
    scrubbing.value = true;
    onScrub();
  };
  const onMousemove = () => {
    if (scrubbing.value) {
      onScrub();
    }
  };
  const onMouseup = () => {
    onScrub();
    scrubbing.value = false;
  };
  return {
    width,
    height,
    currentX,
    currentTime,
    onMousedown,
    onMousemove,
    onMouseup,
  };
};

const container = ref(null);
const svg = ref(null);

const {
  width,
  height,
  currentX,
  currentTime,
  onMousedown,
  onMousemove,
  onMouseup,
} = useScrubber(container, svg);

const xScale = computed(() =>
  scaleTime()
    .domain([new Date(data.xMin), new Date(data.xMax)])
    .range([0, width.value])
);

const yScale = computed(() =>
  scaleLinear().domain([data.yMin, data.yMax]).range([0, height.value])
);

const dataWithPath = computed(() => {
  const users = data.users.map((user) => {
    const path = polygonpath(
      user.messages.map((m) => [
        xScale.value(new Date(m.datetime)),
        height.value - yScale.value(m.value),
      ])
    );
    return { ...user, path };
  });
  return { ...data, users };
});
</script>

<template>
  <div ref="container" class="w-full">
    {{ currentX }} / {{ currentTime }}
    <svg
      class="rounded bg-gray-900"
      ref="svg"
      :width="width"
      :height="height"
      @mousedown="onMousedown"
      @mousemove="onMousemove"
      @mouseup="onMouseup"
    >
      <path
        v-for="user in dataWithPath.users"
        :d="user.path"
        fill="none"
        :stroke="user.color"
        :opacity="!username || user.username === username ? 1 : 0.2"
        stroke-width="2"
      />
      <line
        v-if="currentX !== null"
        :x1="currentX"
        y1="0"
        :x2="currentX"
        :y2="height"
        class="stroke-red-500"
      />
    </svg>
  </div>
</template>
