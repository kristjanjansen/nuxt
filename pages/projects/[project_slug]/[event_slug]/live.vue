<script setup lang="ts">
const route = useRoute();
const slug = route.params.event_slug;

const { data: event, error } = await useEventBySlug(slug);

//const url = "https://le21.babahhcdn.com/bb1150-le/x_live_1_c1.smil/playlist.m3u8"
const url = "https://sb.err.ee/live/etv.m3u8";

const front = ref("video");

// TODO: Abstract into
// const { draggables = { key : Ref({ x, y, onDrag, onDock, docked, front })]} = useDraggables({ key: { x, y }})

const dock = ref<any>({
  about: { docked: false, front: false },
  video: { docked: false, front: false },
  chat: { docked: false, front: false },
});

const toggleDock = (key) => {
  dock.value[key].docked = !dock.value[key].docked;
  Object.keys(dock.value).forEach((k) => (dock.value[k].front = false));
  dock.value[key].front = true;
};

const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack
    v-else
    class="relative grid p-4 md:h-full md:place-items-center md:p-6"
  >
    <Breadboard class="hidden md:block" />
    <Link class="md:absolute md:top-6 md:left-6" left :to="event.eventLink">
      Back to event
    </Link>

    <Draggable
      :x="200"
      :y="100"
      @startDrag="dock.video.front = true"
      :isFront="dock.video.front"
      :dockable="true"
      @dock="toggleDock('video')"
      :docked="dock.video.docked"
    >
      <Videostream :url="url" class="md:w-[70vw]" />
    </Draggable>

    <Draggable
      :x="900"
      :y="200"
      @startDrag="dock.chat.front = true"
      :isFront="dock.chat.front"
      :dockable="true"
      @dock="toggleDock('chat')"
      :docked="dock.chat.docked"
    >
      <Chat class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>

    <Draggable
      :x="100"
      :y="300"
      @startDrag="dock.about.front = true"
      :isFront="dock.about.front"
      :dockable="true"
      @dock="toggleDock('about')"
      :docked="dock.about.docked"
    >
      <Stack class="overflow-y-scroll p-4 md:h-[30vw] md:w-[30vw]">
        <Title>
          {{ event.titles[lang] }}
        </Title>
        <EventDatetime :event="event" />
        <Content :content="event.descriptions[lang]" />
      </Stack>
    </Draggable>
    <Fade>
      <div class="fixed bottom-0 left-6 flex font-mono">
        <template v-for="(d, key) in dock">
          <button
            @click="toggleDock(key)"
            class="text-mono !cursor-pointer border-t border-r border-gray-700 py-2 px-4 text-sm uppercase text-gray-300 transition first:border-l hover:bg-gray-900"
            :class="d.docked ? '!text-gray-700' : ''"
          >
            {{ key }}
          </button>
        </template>
      </div>
    </Fade>
  </Stack>
</template>
