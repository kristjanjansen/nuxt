<script setup lang="ts">
import { useIdle, useMediaControls, useTimeout } from "@vueuse/core";
import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";
import { parseStrapi } from "~~/composables/strapi";

// Page data

const { data: frontpage, error: frontpageError } = useFrontpage();

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
  <Stack v-else class="relative h-full p-4 md:p-0">
    <video
      ref="video"
      loop
      muted
      autoplay
      playsinline
      class="absolute inset-0 h-full w-full flex-col object-cover opacity-70"
      :class="[['', 'invert'][theme]]"
    />
    <Content
      class="top-8 left-8 right-8 w-auto font-title text-2xl text-white md:absolute md:right-auto md:w-[30vw] md:text-3xl"
      :content="frontpage.descriptions[lang]"
    />
    <button
      class="absolute bottom-0 left-1 rounded-full p-3"
      @click.stop="muted = !muted"
    >
      <IconMuted v-if="muted" class="h-4 w-4" />
      <IconUnmuted v-if="!muted" class="h-4 w-4" />
    </button>
    <Draggable v-bind="d.upcoming">
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
            {{
              [
                `See all ${upcomingEvents.length} events`,
                "Vaata kõiki tulevasi sündmusi",
              ][lang]
            }}
          </Link>
        </Stack>
      </div>
    </Draggable>
    <Dock :draggables="d" class="!left-12" />
  </Stack>
</template>
