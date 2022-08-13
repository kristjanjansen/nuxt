<script setup lang="ts">
import { useMediaControls } from "@vueuse/core";
import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";

// Page data

const { data: frontpage, error: frontpageError } = useFrontPage();

// Video

const video = ref<HTMLVideoElement | null>(null);
const { muted } = useMediaControls(video, {
  src: frontpage.value?.background.url || "",
});

onMounted(() => (muted.value = true));

// Upcoming events data

const { data: upcomingEvents, error: eventsError } = await useEvents({
  filters: { start_at: { $gte: today() } },
});

const event = computed(() => {
  return frontpage.value?.events?.length ? frontpage.value.events[0] : null;
});

const d = useDraggables({
  upcoming: { x: 250, y: 250 },
});

// Utilities

const { theme } = useTheme();
const { lang } = useLang();
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
      class="h-full w-full flex-col object-cover"
      :class="[['', 'invert'][theme]]"
    />
    <Breadboard class="bg-black/80" />
    <Stack class="absolute top-4 left-4 right-4 gap-4 md:top-6 md:left-6">
      <Content
        class="w-auto font-title text-xl text-white md:w-[30vw] md:text-2xl"
        :content="frontpage?.descriptions[lang]"
      />
      <Draggable v-if="event" v-bind="d.upcoming">
        <div class="grid gap-4 p-4 md:w-[50vw] md:grid-cols-[1fr_3fr]">
          <Image
            class="pointer-events-none aspect-square rounded object-cover"
            :image="event.thumbnail"
          />
          <Stack>
            <Title medium>{{ event.titles[lang] }}</Title>
            <EventDatetime :event="event" />
            <EventButton v-if="event.slug !== 'kausaal-4'" :event="event" />
            <NuxtLink
              v-if="event.slug === 'kausaal-4'"
              to="/projects/kausaal/kausaal-4/live"
            >
              <Button primary>{{
                ["Watch event", "Vaata üritust"][lang]
              }}</Button>
            </NuxtLink>
            <Content :content="event.intros[lang]" />
            <Link to="/schedule" right>
              {{
                [`See all upcoming events`, "Vaata kõiki tulevasi sündmusi"][
                  lang
                ]
              }}
            </Link>
          </Stack>
        </div>
      </Draggable>
    </Stack>
    <button
      class="fixed bottom-0 left-1 rounded-full p-3"
      @click.stop="muted = !muted"
    >
      <IconMuted v-if="muted" class="h-4 w-4" />
      <IconUnmuted v-if="!muted" class="h-4 w-4" />
    </button>
    <Dock :draggables="d" class="!left-12" />
  </div>
</template>
