<script setup lang="ts">
const slug = "experiment";
const videostreams = getVideostreams(slug);

const d = useDraggables({
  info: { x: 100, y: 400, docked: true },
  video: { x: 200, y: 100 },
  chat: { x: 900, y: 300 },
  controls: { x: 200, y: 600 },
});

const { lang } = useLang();

const data_1 = ref(0);

watch(data_1, () => {
  //console.log(data_1);
});

const onClick = () => console.log("click");
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

    <Draggable
      v-bind="d.controls"
      class="fixed top-[50vw] left-[10vw] w-[20vw]"
    >
      <Stack>
        <p>Label comes here</p>
        <input
          v-model="data_1"
          type="range"
          max="10"
          step="any"
          class="z-1000 w-full"
          @click.prevent="onClick"
        />
        <p>Markers will be here</p>
      </Stack>
    </Draggable>

    <Dock :draggables="d" />
  </Stack>
</template>
