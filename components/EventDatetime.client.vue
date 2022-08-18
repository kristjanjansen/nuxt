<script setup lang="ts">
import IconChevron from "~icons/radix-icons/chevron-right";

type Props = {
  event: any;
};
const { event } = defineProps<Props>();
const {
  formattedDatetimeFirst,
  formattedDatetimeSecond,
  formattedStartAtDistance,
  urgency,
} = useDatetime(event.start_at, event.end_at);

const { lang } = useLang();
</script>

<template>
  <div class="text-sm">
    <div class="flex w-max items-center gap-1">
      <div class="text-gray-400">{{ formattedDatetimeFirst }}</div>
      <IconChevron v-if="formattedDatetimeSecond" class="text-gray-500" />
      <div class="text-gray-400">{{ formattedDatetimeSecond }}</div>
    </div>
    <div>
      <div v-if="urgency === 'now'" class="flex gap-2">
        <div class="animate-pulse pr-1 font-bold uppercase text-green-500">
          LIVE
        </div>
        <div class="text-gray-500">Started {{ formattedStartAtDistance }}</div>
      </div>
      <div v-if="urgency === 'soon'" class="flex gap-2">
        <div class="font-bold uppercase text-orange-500">
          {{ ["Soon", "Varsti"][lang] }}
        </div>
        <div class="text-gray-500">
          {{ formattedStartAtDistance }}
        </div>
      </div>
    </div>
  </div>
</template>
