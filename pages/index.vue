<script setup lang="ts">
import { useIdle, useMediaControls, useTimeout } from "@vueuse/core";
import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";
import { parseStrapi } from "~~/composables/strapi";

// Page data

const { data: frontpage, error: frontpageError } = useFrontPage();

// Video

const video = ref<HTMLVideoElement | null>(null);
const { muted } = useMediaControls(video, {
  src: frontpage.value?.background.url || "",
});

onMounted(() => (muted.value = true));

// Events data

const { data: upcomingEvents, error: eventsError } = await useEvents({
  filters: { start_at: { $gte: today() } },
});
const event = upcomingEvents.value?.[0];

const d = useDraggables({
  upcoming: { x: 300, y: 300 },
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
        :content="frontpage.descriptions[lang]"
      />
      <Draggable v-bind="d.upcoming">
        <div
          class="grid gap-4 p-4 md:h-[25vw] md:w-[50vw] md:grid-cols-[1fr_3fr]"
        >
          <Image
            class="pointer-events-none aspect-square rounded object-cover"
            :image="
              event.thumbnail ||
              'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22/%3E'
            "
          />
          <Stack>
            <Title medium>{{ event.titles[lang] }}</Title>
            <EventDatetime :event="event" />
            <EventButton :event="event" />
            <Content nolinks :content="event.intros[lang]" />
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
