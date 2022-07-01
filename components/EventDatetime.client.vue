<script setup lang="ts">
import { useNow } from "@vueuse/core";
import { add } from "date-fns";

type Props = {
  event: any;
};
const { event } = defineProps<Props>();

const isSameDay = event.formattedStartAtDate === event.formattedEndAtDate;
const first = isSameDay
  ? `${event.formattedStartAtDate} ${event.formattedStartAtTime}-${event.formattedEndAtTime}`
  : `${event.formattedStartAtDate} ${event.formattedStartAtTime}`;
const second = isSameDay
  ? ""
  : `${event.formattedEndAtDate} ${event.formattedEndAtTime}`;
</script>

<template>
  <div class="text-sm">
    <div class="text-gray-300">{{ first }}</div>
    <div class="mb-1 text-gray-300">{{ second }}</div>
    <div v-if="event.urgency !== 'soon'" class="text-gray-500">
      {{ event.formattedStartAtDistance }}
    </div>
    <SoonBadge>
      {{ event.formattedStartAtDistance }}
    </SoonBadge>
    <div
      v-if="event.urgency === 'live'"
      class="inline-block rounded border border-red-500 px-2 py-1 text-xs font-bold uppercase tracking-wider text-red-500"
    >
      Live
    </div>
  </div>
</template>
