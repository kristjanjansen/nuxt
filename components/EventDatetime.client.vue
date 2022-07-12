<script setup lang="ts">
import IconChevron from "~icons/radix-icons/chevron-right";

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
const { lang } = useLang();
</script>

<template>
  <div class="text-sm">
    <div class="flex w-max items-center gap-1">
      <div class="text-gray-300">{{ first }}</div>
      <IconChevron class="text-gray-500" />
      <div class="text-gray-300">{{ second }}</div>
    </div>
    <div>
      <div v-if="event.urgency === 'now'" class="flex gap-2">
        <div class="animate-pulse pr-1 font-bold uppercase text-green-500">
          LIVE
        </div>
        <div class="text-gray-500">
          Started {{ event.formattedStartAtDistance }}
        </div>
      </div>
      <div v-if="event.urgency === 'soon'" class="flex gap-2">
        <div class="font-bold uppercase text-orange-500">
          {{ ["Soon", "Varsti"][lang] }}
        </div>
        <div class="text-gray-500">
          {{ event.formattedStartAtDistance }}
        </div>
      </div>
    </div>
  </div>
</template>
