<script setup lang="ts">
import { debouncedWatch, useWebSocket } from "@vueuse/core";
import { send } from "vite";

const slug = "experiment";
const videostreams = getVideostreams(slug);
const type = "DATA_1";

const d = useDraggables({
  info: { x: 100, y: 400 },
  video: { x: 200, y: 100 },
  chat: { x: 900, y: 300 },
});

const data_1 = ref(0);
const m = useMessages2();

debouncedWatch(
  data_1,
  () => {
    const message = {
      channel: slug,
      userid: useUserId(),
      username: useUserName(),
      type,
      value: data_1.value,
    };
    m.sendMessage(message);
  },
  { debounce: 200 }
);
</script>

<template>
  <Stack class="relative grid p-4 md:h-full md:place-items-center md:p-0">
    <Breadboard class="bg-gray-900" />
    <Link left to="/lab">Lab</Link>

    <Draggable v-bind="d.info" class="h-[25vw] p-4 md:w-[25vw]">
      <!-- <pre class="text-sm text-gray-200">{{ videostreams }}</pre> -->
      <pre class="text-sm text-gray-200">{{ m.messages }}</pre>
    </Draggable>

    <Draggable v-bind="d.chat">
      <Chat :channel="slug" class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>

    <Draggable v-bind="d.video" v-if="videostreams.length">
      <Videostream :url="videostreams[0].url" class="md:w-[70vw]" />
    </Draggable>

    <div
      v-bind="d.controls"
      class="fixed top-[40vw] left-[5vw] !w-[32vw] border border-gray-700 bg-black/70 p-4 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
    >
      <Stack>
        <p>Label comes here</p>
        <input
          v-model.number="data_1"
          type="range"
          max="10"
          step="any"
          class="w-full"
        />
        <p>Markers will be here</p>
      </Stack>
    </div>

    <Dock :draggables="d" />
  </Stack>
</template>
