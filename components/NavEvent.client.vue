<script setup lang="ts">
import IconArrowRight from "~icons/radix-icons/arrow-right";
const {
  data: event,
  formattedStartAtDistance,
  urgency,
  error,
} = await useUpcomingEvent();
const { lang } = useLang();
</script>

<template>
  <FadeTransition>
    <NuxtLink
      v-if="event && !error"
      :to="event.eventLink"
      class="flex h-9 items-center justify-between gap-2 border-r border-b border-l border-gray-700 bg-black/90 px-3 text-sm transition hover:bg-gray-900"
    >
      <div class="flex gap-1">
        <SoonBadge v-if="urgency.value === 'soon'" />
        <NowBadge v-if="urgency.value === 'now'" />
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
    </NuxtLink>
  </FadeTransition>
</template>
