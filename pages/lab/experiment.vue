<script setup lang="ts">
import { debouncedWatch, useWebSocket } from "@vueuse/core";
import { format } from "date-fns";
import { send } from "vite";

const slug = "experiment";
const videostreams = getVideostreams(slug);
const type = "DATA_1";

const d = useDraggables({
  help: { x: 700, y: 50 },
  data: { x: 100, y: 300 },
  video: { x: 200, y: 100 },
  controls: { x: 450, y: 550 },
  chat: { x: 900, y: 300, docked: true },
});

const data_1 = ref(0);
const m = clientUseMessages();

debouncedWatch(
  data_1,
  () => {
    const message = {
      channel: slug,
      type,
      value: data_1.value,
      userid: useUserId().value,
      username: useUserName().value,
    };
    m.sendMessage(message);
  },
  { debounce: 200 }
);

const onDownloadCsv = () => {
  downloadCSV(m.messages, `${format(new Date(), "dd_MM_y__HH_mm_ss")}.csv`);
};
</script>

<template>
  <div>
    <Stack class="relative grid p-4 md:h-full md:place-items-center md:p-0">
      <Breadboard class="bg-gray-900" />
      <Link left to="/lab" class="absolute top-4 left-4">Lab</Link>

      <Draggable v-bind="d.help">
        <div class="whitespace-pre-wrap p-4 font-mono text-sm text-gray-200">
          {{ videostreams }}
        </div>
      </Draggable>

      <Draggable v-bind="d.data" class="md:w-[30vw]">
        <Stack class="p-4">
          <Title medium>Data</Title>
          <div
            class="h-[15vw] overflow-auto whitespace-pre-wrap font-mono text-sm text-gray-200"
          >
            {{ m.messages }}
          </div>
          <Button primary @click="onDownloadCsv" :disabled="!m.messages.length"
            >Download CSV</Button
          >
        </Stack>
      </Draggable>

      <Draggable v-bind="d.chat">
        <Chat :channel="slug" class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
      </Draggable>

      <Draggable v-bind="d.video" v-if="videostreams.length">
        <Videostream :url="videostreams[0].url" class="md:w-[70vw]" />
      </Draggable>

      <Draggable v-bind="d.controls" class="md:w-[40vw]">
        <Title medium class="p-4 pb-0">I am</Title>
        <template #undraggable>
          <Stack class="p-4">
            <input
              v-model.number="data_1"
              type="range"
              max="10"
              step="any"
              class="w-full"
            />
            <div class="flex w-full justify-between">
              <div>🤩 Excited</div>
              <div>😐 Neutraalne</div>
              <div>😴 Losing my focus</div>
            </div>
          </Stack>
        </template>
      </Draggable>

      <Dock :draggables="d" />
    </Stack>
  </div>
</template>
