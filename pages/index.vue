<script setup lang="ts">
import { useMediaControls } from "@vueuse/core";
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
    <button class="absolute bottom-8 left-8" @click="muted = !muted">
      <IconMuted v-if="muted" />
      <IconUnmuted v-if="!muted" />
    </button>
    <div
      v-if="event"
      class="top-[15vw] left-[15vw] h-[20vw] w-[40vw] md:absolute"
    >
      <Card
        class="inset-0 grid grid-cols-[1fr_1fr] overflow-hidden bg-black/50 !p-0 md:absolute"
      >
        <div>
          <Image
            class="h-full w-full object-cover"
            :image="
              event.thumbnail ||
              'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22/%3E'
            "
          />
        </div>
        <Stack class="p-6">
          <Title medium>{{ event.titles[lang] }}</Title>
          <Content nolinks :content="event.intros[lang]" />
          <EventDatetime :event="event" />
          <Link to="/schedule" right>
            See all {{ upcomingEvents.length }} upcoming events
          </Link>
        </Stack>
      </Card>
    </div>
  </div>
</template>
