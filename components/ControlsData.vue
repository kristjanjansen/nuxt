<script setup lang="ts">
import IconCircle from "~icons/ph/circle-fill";

type Props = {
  messages: any[];
  controls?: any[];
  wide?: boolean;
};
const props = defineProps<Props>();
const wide = props.wide || false;

const controlsData = useControlsData(
  toRef(props, "messages"),
  toRef(props, "controls")
);
const username = ref(null);
</script>

<template>
  <Stack class="gap-12">
    <Stack v-for="d in controlsData" class="!gap-2">
      <Title small>{{ d.control?.title || d.type }}</Title>
      <Code v-if="!wide">{{
        formatData({
          Type: d.type,
          "Graph start": formatDatetimePrecise(d.xMin),
          "Data start": formatDatetimePrecise(d.xDataMin),
          "Data end": formatDatetimePrecise(d.xDataMax),
          "Graph end": formatDatetimePrecise(d.xMax),
          "Min value": d.yDataMin,
          "Max value": d.yDataMax,
        })
      }}</Code>
      <div v-if="wide" class="justify-between md:flex">
        <div class="gap-4 md:flex">
          <Code class="text-gray-500"
            >Start: {{ formatDatetimePrecise(d.xMin) }}</Code
          >
          <Code>Data start: {{ formatDatetimePrecise(d.xDataMin) }}</Code>
        </div>
        <div class="gap-4 md:flex">
          <Code>Min: {{ d.yDataMin }}</Code>
          <Code>Max: {{ d.yDataMax }}</Code>
        </div>
        <div class="gap-4 md:flex">
          <Code>Data end: {{ formatDatetimePrecise(d.xDataMax) }}</Code>
          <Code>End: {{ formatDatetimePrecise(d.xMax) }}</Code>
        </div>
      </div>
      <ControlsGraph :data="d" :username="username" />
      <div :class="wide ? 'flex justify-between' : ''">
        <div :class="wide ? 'flex flex-wrap gap-4' : ''">
          <button
            v-for="user in d.users.filter((u) => u.username)"
            @click="d.users.length > 1 ? (username = user.username) : null"
            class="flex items-center gap-x-1"
            :class="
              !username || user.username === username
                ? 'opacity-100'
                : 'opacity-30'
            "
          >
            <IconCircle
              class="h-3 w-3"
              :style="{
                color: user.color,
              }"
            />
            <Code class="text-white">
              {{ user.username }}
            </Code>
          </button>
        </div>
        <Button
          small
          @click="username = null"
          :class="username ? 'opacity-50' : 'opacity-0'"
        >
          Show all users
        </Button>
      </div>
    </Stack>
  </Stack>
</template>
