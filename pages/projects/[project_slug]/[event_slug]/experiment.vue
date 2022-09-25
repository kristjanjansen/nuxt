<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { format } from "date-fns";
import IconClear from "~icons/ph/trash";

import { parseControls } from "~~/composables/controls";

const route = useRoute();
const slug = route.params.event_slug as string;
const { data: event, error } = await useEventBySlug(slug);
const videostreams = getVideostreams(event.value.streamkey);

const d = useDraggables({
  stream: { x: 600, y: 50 },
  data: { x: 50, y: 200 },
  rawdata: { x: 400, y: 200 },
  controls: { x: 200, y: 500 },
  about: { x: 100, y: 300, docked: true },
  chat: { x: 900, y: 200, docked: true },
});

const controls = parseControls(event.value.controls);

const { lang } = useLang();

const { messages } = useMessages();
const experimentMessages = computed(() =>
  messages.value.filter((m) =>
    controls.map((c) => c.channel).includes(m.channel)
  )
);
const onDownloadCsv = () => {
  downloadCSV(
    experimentMessages.value,
    `${format(new Date(), "dd_MM_y__HH_mm_ss")}.csv`
  );
};

const { copy } = useClipboard();

const onCopyAndDownloadCsv = () => {
  copy(formatCSV(experimentMessages.value));
  onDownloadCsv();
};

const onClear = () => {
  const clear = confirm("Are you sure you want to clear data?");
  if (clear) {
    messages.value = [];
  }
};

const video = ref<HTMLVideoElement | null>(null);
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack
    v-else
    class="relative grid p-4 md:h-full md:place-items-center md:p-0"
  >
    <Breadboard class="bg-gray-900" />
    <Stack class="md:absolute md:top-6 md:left-6">
      <Button small left to="/lab/experiments">Experiments</Button>
      <Title class="text-gray-500">This is an event experiment page</Title>
      <Button small right :to="event?.eventLiveLink">
        Go to audience page
      </Button>
    </Stack>

    <Draggable
      v-bind="d.data"
      class="h-[30vw] overflow-auto p-4 md:min-w-[20vw]"
    >
      <ControlsData :messages="experimentMessages" :controls="controls" />
    </Draggable>

    <Draggable v-bind="d.rawdata" class="h-[30vw] p-4 md:min-w-[50vw]">
      <div class="flex h-full flex-col gap-5">
        <Code class="h-full overflow-auto !text-gray-500">
          {{ formatData(experimentMessages, true) }}
        </Code>
        <div class="flex w-full items-center justify-between">
          <div class="flex gap-4">
            <Button
              primary
              @click="onCopyAndDownloadCsv"
              :disabled="!experimentMessages.length"
            >
              Copy & download CSV
            </Button>
            <Button
              @click="onDownloadCsv"
              :disabled="!experimentMessages.length"
            >
              Download
            </Button>
          </div>
          <button @click="onClear">
            <IconClear
              class="text-red-500"
              :class="!experimentMessages.length ? 'text-red-900' : ''"
            />
          </button>
        </div>
      </div>
    </Draggable>

    <Draggable
      v-bind="d.stream"
      v-if="videostreams.length"
      class="bg-gray-900 md:w-[50vw]"
    >
      <Videostream :url="videostreams[0].url" />
      <Code class="p-2">{{ formatData(videostreams[0]) }}</Code>
    </Draggable>

    <Draggable
      v-if="event.controls"
      v-bind="d.controls"
      class="p-4 md:w-[30vw]"
    >
      <Controls :controls="controls" />
    </Draggable>

    <Draggable v-bind="d.about">
      <Stack class="overflow-y-scroll p-4 md:h-[30vw] md:w-[30vw]">
        <Title>
          {{ event.titles[lang] }}
        </Title>
        <EventDatetime :event="event" />
        <Content :content="event?.descriptions[lang]" />
      </Stack>
    </Draggable>

    <Draggable v-bind="d.chat">
      <Chat :channel="slug" class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>

    <Dock :draggables="d" />
  </Stack>
</template>
