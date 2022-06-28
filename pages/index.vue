<script setup lang="ts">
import { useIdle, useMediaControls, useTimeout } from "@vueuse/core";
import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";
import { parseStrapi } from "~~/composables/strapi";

const d = useDraggables({
  upcoming: { x: 300, y: 300 },
});

const video = ref();
const src =
  "https://fra1.digitaloceanspaces.com/elektron/strapi/0ea3ff8704a2e6b444d3fe442532923e.mp4";

const { muted } = useMediaControls(video, {
  src,
});
onMounted(() => (muted.value = true));
const { theme } = useTheme();

const { data: frontpage, error: frontpageError } = await useAsyncData<any>(
  "frontpage",
  () =>
    $fetch("https://strapi4.elektron.art/api/frontpage?populate=*").then(
      (res: any) => parseStrapi(res.data)
    )
);

const { lang } = useLang();
const description = computed(() => {
  const descriptionEn = frontpage.value.localizations?.[0].description;
  const descriptionEt = frontpage.value.description;
  return [descriptionEn, descriptionEt][lang.value];
});

const { data: upcomingEvents, error: eventsError } = await useEvents({
  filters: { start_at: { $gte: today() } },
});
const event = upcomingEvents.value?.[0];
</script>

<template>
  <ErrorCard v-if="frontpageError || eventsError" />
  <div v-else class="relative h-full">
    <video
      ref="video"
      loop
      muted
      autoplay
      playsinline
      class="absolute inset-0 h-full w-full flex-col object-cover opacity-70"
      :class="[['', 'invert'][theme]]"
    />
    <Breadboard />
    <Content
      class="absolute top-8 left-8 right-8 font-title text-xl md:right-auto md:text-2xl"
      :content="description"
    />
    <button
      class="absolute bottom-1 left-1 rounded-full p-3 transition-all hover:bg-neutral-100/20"
      @click.stop="muted = !muted"
    >
      <IconMuted v-if="muted" class="h-4 w-4" />
      <IconUnmuted v-if="!muted" class="h-4 w-4" />
    </button>
    <Draggable2 v-bind="d.upcoming">
      <div class="grid grid-cols-[1fr_1fr] md:h-[25vw] md:w-[50vw]">
        <div>
          <Image
            class="pointer-events-none h-full w-full object-cover"
            :image="
              event.thumbnail ||
              'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22/%3E'
            "
          />
        </div>
        <Stack class="overflow-y-auto p-6">
          <Title medium>{{ event.titles[lang] }}</Title>
          <EventDatetime :event="event" />
          <EventButton :event="event" />
          <Content nolinks :content="event.intros[lang]" />
          <Link to="/schedule" right>
            See all {{ upcomingEvents.length }} upcoming events
          </Link>
        </Stack>
      </div>
    </Draggable2>
    <Dock :draggables="d" class="left-12" />
  </div>
</template>
