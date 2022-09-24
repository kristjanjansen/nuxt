<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import { scaleLinear, scaleTime } from "d3";

type Props = {
  data: any;
};
const { data } = defineProps<Props>();

const graph = ref(null);
const { width } = useElementSize(graph);
const height = ref(100);

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
        yScale.value(m.value),
      ])
    );
    return { ...user, path };
  });
  return { ...data, users };
});
</script>

<template>
  <div ref="graph" class="w-full border">
    <svg
      class="rounded-lg border border-red-500"
      ref="svg"
      :width="width"
      :height="height"
    >
      <rect
        :width="width"
        :height="height"
        fill="fill-white/10"
        opacity="0.1"
      />
      <path
        v-for="user in dataWithPath.users"
        :d="user.path"
        fill="none"
        :stroke="user.color"
        stroke-width="2"
      />
    </svg>
  </div>
</template>
