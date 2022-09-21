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
      <Breadboard class="bg-grey-900" />

      <Button small left to="/lab" class="absolute top-4 left-4">Lab</Button>

      <Draggable
        v-bind="d.help"
        class="whitespace-pre-wrap p-4 font-mono text-sm text-grey-200"
      >
        {{ videostreams }}
      </Draggable>

      <Draggable v-bind="d.data" class="p-4 md:w-[50vw]">
        <Stack>
          <Title medium>Data</Title>
          <div class="h-[15vw] overflow-auto font-mono text-sm text-grey-200">
            {{ m.messages }}
          </div>
          <Button primary @click="onDownloadCsv" :disabled="!m.messages.length"
            >Download CSV</Button
          >
        </Stack>
      </Draggable>

      <Draggable v-bind="d.chat" class="h-[60vw] md:h-[30vw] md:w-[25vw]">
        <Chat :channel="slug" />
      </Draggable>

      <Draggable
        v-bind="d.video"
        v-if="videostreams.length"
        class="md:w-[60vw]"
      >
        <Videostream :url="videostreams[0].url" />
      </Draggable>

      <Draggable v-bind="d.controls" class="p-4 md:w-[40vw]">
        <Stack>
          <input
            v-model.number="data_1"
            type="range"
            max="10"
            step="any"
            class="w-full accent-green-500"
          />
          <div class="flex w-full justify-between tracking-wide">
            <div>🤩 Excited</div>
            <div>😐 Neutraalne</div>
            <div>😴 Losing my focus</div>
          </div>
        </Stack>
      </Draggable>

      <Dock :draggables="d" />
    </Stack>
  </div>
</template>
