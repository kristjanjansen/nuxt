<script setup lang="ts">
import {
  useElementSize,
  useMediaControls,
  useMouseInElement,
} from "@vueuse/core";
import { scaleLinear } from "d3";

const route = useRoute();
const { filename } = route.params;
const { getFiles } = useFiles();
const path = "records";
const { data: files } = await getFiles(path);

const file = computed(() => {
  return files.value?.filter((file) => file.filename === filename)[0];
});

const video = ref(null);
const container = ref(null);
const svg = ref(null);

const { width, height, currentX, onMousedown, onMousemove, onMouseup } =
  useVideoScrubber(video, container, svg);

const data = [
  {
    id: "0h4rl2yzhrkaxdy3",
    datetime: "2022-09-25T06:31:42.478Z",
    channel: "experiment",
    type: "DATA_1",
    value: 2,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "vlg9daoplb090q15",
    datetime: "2022-09-25T06:31:44.530Z",
    channel: "experiment",
    type: "DATA_1",
    value: 3,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "pppflmu22f7tzce0",
    datetime: "2022-09-25T06:31:45.046Z",
    channel: "experiment",
    type: "DATA_1",
    value: 4,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "l0nj0dssd23l25iw",
    datetime: "2022-09-25T06:31:45.884Z",
    channel: "experiment",
    type: "DATA_1",
    value: 2,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "5kkpnu3us6yqi0cw",
    datetime: "2022-09-25T06:31:47.241Z",
    channel: "experiment",
    type: "DATA_2",
    value: 1.83,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "qta3ysre2y1j9k3m",
    datetime: "2022-09-25T06:31:47.606Z",
    channel: "experiment",
    type: "DATA_2",
    value: 3.46,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "pg3et89mnst2ysp9",
    datetime: "2022-09-25T06:31:47.960Z",
    channel: "experiment",
    type: "DATA_2",
    value: 5.92,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "kig71sebisk2jwh5",
    datetime: "2022-09-25T06:31:48.324Z",
    channel: "experiment",
    type: "DATA_2",
    value: 7.97,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "jypucg7qgyz718jr",
    datetime: "2022-09-25T06:31:49.361Z",
    channel: "experiment",
    type: "DATA_1",
    value: 4,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "8yi9ox43a1v2sm6p",
    datetime: "2022-09-25T06:31:49.792Z",
    channel: "experiment",
    type: "DATA_1",
    value: 3,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "k5t4ob66aaulh6mo",
    datetime: "2022-09-25T06:31:50.225Z",
    channel: "experiment",
    type: "DATA_1",
    value: 2,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "y50neqrkesxqmpgc",
    datetime: "2022-09-25T06:31:51.558Z",
    channel: "experiment",
    type: "DATA_2",
    value: 1.12,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "47v3jmkkm5qk1ef5",
    datetime: "2022-09-25T06:31:52.058Z",
    channel: "experiment",
    type: "DATA_2",
    value: 2.57,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "pv8grxm05m8eu5fc",
    datetime: "2022-09-25T06:31:52.457Z",
    channel: "experiment",
    type: "DATA_2",
    value: 5.11,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
  {
    id: "jk9dyk7ldzpv4uqz",
    datetime: "2022-09-25T06:31:52.909Z",
    channel: "experiment",
    type: "DATA_2",
    value: 7.43,
    userid: "m9o8adefow5mvjv5d3gj32q8svvnv2uxuyy9",
    username: "Mino Mano?",
  },
];

const messages = computed(() => {
  if (!file) return [];
  return [
    {
      datetime: new Date(file.value.start_at).toISOString(),
      type: "VIDEO",
      value: 0,
    },
    {
      datetime: new Date(file.value.end_at).toISOString(),
      type: "VIDEO",
      value: 10,
    },
    ...data,
  ];
});
</script>

<template>
  <div>
    <Stack v-if="file" class="p-4 md:p-6">
      <Button small to="/lab/experiments" left>Back</Button>
      <Title>{{ file.streamkey }}</Title>
      <Code>{{ formatData(messages, true) }}</Code>
      <video
        ref="video"
        :src="file.src"
        class="aspect-video w-96"
        playsinline
        controls
      />
      <Code>
        {{
          formatData({
            "Start at": file.start_at_formatted,
            "End at": file.end_at_formatted,
            Duration: file.duration_formatted,
          })
        }}
      </Code>
      <div ref="container" class="w-full">
        <svg
          ref="svg"
          class="rounded border bg-gray-900"
          :width="width"
          :height="height"
          @mousedown="onMousedown"
          @mousemove="onMousemove"
          @mouseup="onMouseup"
        >
          <line
            :x1="currentX"
            y1="0"
            :x2="currentX"
            :y2="height"
            class="stroke-red-500"
          />
        </svg>
      </div>
      <ControlsData :messages="messages" />
      <Code>{{ file }}</Code>
    </Stack>
  </div>
</template>
