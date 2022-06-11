<script setup lang="ts">
import { useIdle, useMediaControls } from "@vueuse/core";
import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";

const video = ref();
const src =
  "https://fra1.digitaloceanspaces.com/elektron/strapi/0ea3ff8704a2e6b444d3fe442532923e.mp4";

const { muted } = useMediaControls(video, {
  src,
});
onMounted(() => (muted.value = true));
const { theme } = useTheme();

const { data: frontpage } = await $fetch(
  "https://strapi4.elektron.art/api/frontpage?populate=*"
);
const descriptionEn =
  frontpage.attributes.localizations.data[0].attributes.description;
const descriptionEt = frontpage.attributes.description;

const { lang } = useLang();
const description = computed(() => {
  return [descriptionEn, descriptionEt][lang.value];
});

const { data: upcomingEvents } = await useEvents({
  filters: { start_at: { $gte: today() } },
});
const event = upcomingEvents.value?.[0];

const { idle } = useIdle(5000);
</script>

<template>
  <div class="relative h-full">
    <Breadboard />
    <video
      ref="video"
      loop
      muted
      autoplay
      playsinline
      class="absolute inset-0 h-full w-full flex-col object-cover opacity-20"
      :class="[['', 'invert'][theme]]"
    />
    <Content
      class="absolute top-8 left-8 right-8 text-xl md:right-auto md:text-2xl"
      :content="description"
    />
    <button
      class="absolute bottom-4 left-4 rounded-full p-3 transition-all hover:bg-neutral-100/20"
      @click="muted = !muted"
    >
      <IconMuted v-if="muted" />
      <IconUnmuted v-if="!muted" />
    </button>
    <Draggable v-if="event" :x="200" :y="200">
      <div class="grid grid-cols-[1fr_1fr] md:h-[25vw] md:w-[50vw]">
        <div>
          <Image
            class="h-full w-full object-cover"
            :image="
              event.thumbnail ||
              'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22/%3E'
            "
          />
        </div>
        <Stack class="overflow-y-auto p-6">
          <Title medium>{{ event.titles[lang] }}</Title>
          <EventDatetime :event="event" />
          <NuxtLink :to="event.eventLiveLink">
            <Button primary>Go to event</Button>
          </NuxtLink>
          <Content nolinks :content="event.intros[lang]" />
          <Link to="/schedule" right>
            See all {{ upcomingEvents.length }} upcoming events
          </Link>
        </Stack>
      </div>
    </Draggable>
  </div>
</template>
