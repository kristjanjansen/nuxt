<script setup lang="ts">
const slug = "experiment";
const videostreams = getVideostreams(slug);

const d = useDraggables({
  info: { x: 100, y: 400, docked: true },
  video: { x: 200, y: 100 },
  chat: { x: 900, y: 300 },
});

const { lang } = useLang();
</script>

<template>
  <Stack class="relative grid p-4 md:h-full md:place-items-center md:p-0">
    <Breadboard class="bg-gray-900" />
    <Link left to="/lab">Lab</Link>

    <Draggable v-bind="d.info" class="p-4">
      <pre class="text-sm text-gray-200">{{ videostreams }}</pre>
    </Draggable>

    <Draggable v-bind="d.chat">
      <Chat :channel="slug" class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>

    <Draggable v-bind="d.video" v-if="videostreams.length">
      <Videostream :url="videostreams[0].url" class="md:w-[70vw]" />
    </Draggable>

    <Dock :draggables="d" />
  </Stack>
</template>
