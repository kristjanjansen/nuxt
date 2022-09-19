<script setup lang="ts">
import IconArrowRight from "~icons/radix-icons/arrow-right";
const {
  data: event,
  formattedStartAtDistance,
  error,
} = await useUpcomingEvent();
const { lang } = useLang();
</script>

<template>
  <FadeTransition>
    <RouterLink
      v-if="event && !error"
      :to="event.eventLink"
      class="flex h-10 items-center justify-between gap-2 border-r border-b border-l border-gray-700 bg-black/90 px-3 text-sm transition hover:bg-gray-900"
    >
      <div class="flex gap-1">
        <pre
          v-if="false"
          class="fixed inset-0 overflow-scroll truncate bg-black"
        >
        {{ event }}
        </pre>
        <LiveBadge />
        <div class="tracking-wide" v-html="event.titles[lang]"></div>
        <div v-if="event.authors" class="hidden tracking-wide md:block">
          {{ ["by", ""][lang] }} {{ event.authors }}
        </div>
        <div
          v-if="formattedStartAtDistance.value"
          class="tracking-wide text-gray-500"
        >
          {{ formattedStartAtDistance.value }}
        </div>
      </div>
      <IconArrowRight class="text-green-400" />
    </RouterLink>
  </FadeTransition>
</template>
