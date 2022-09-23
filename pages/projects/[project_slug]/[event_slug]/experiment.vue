<script setup lang="ts">
import { format } from "date-fns";
import IconClear from "~icons/ph/trash";

import { parseControls } from "~~/composables/controls";

const route = useRoute();
const slug = route.params.event_slug as string;
const { data: event, error } = await useEventBySlug(slug);
const videostreams = getVideostreams(event.value.streamkey);

const d = useDraggables({
  info: { x: 600, y: 50 },
  about: { x: 100, y: 300, docked: true },
  stream: { x: 200, y: 100 },
  chat: { x: 900, y: 200, docked: true },
  controls: { x: 400, y: 400 },
  data: { x: 100, y: 300 },
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
      v-bind="d.info"
      class="whitespace-pre-wrap p-4 font-mono text-sm text-gray-200"
    >
      {{ videostreams }}
    </Draggable>

    <Draggable v-bind="d.data" class="p-4 md:w-[50vw]">
      <Stack>
        <div class="h-[15vw] overflow-auto font-mono text-sm text-gray-500">
          {{ experimentMessages }}
        </div>
        <div class="flex w-full items-center justify-between">
          <Button
            primary
            @click="onDownloadCsv"
            :disabled="!experimentMessages.length"
          >
            Download CSV
          </Button>
          <button @click="onClear">
            <IconClear
              class="text-red-500"
              :class="!experimentMessages.length ? 'text-red-900' : ''"
            />
          </button>
        </div>
      </Stack>
    </Draggable>

    <Draggable v-bind="d.stream" v-if="videostreams.length" class="md:w-[70vw]">
      <Videostream :url="videostreams[0].url" />
    </Draggable>

    <Draggable v-bind="d.chat">
      <Chat :channel="slug" class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
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

    <Draggable
      v-if="event.controls"
      v-bind="d.controls"
      class="p-4 md:w-[30vw]"
    >
      <Controls :controls="controls" />
    </Draggable>

    <Dock :draggables="d" />
  </Stack>
</template>
