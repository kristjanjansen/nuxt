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
      <div class="tracking-wide text-grey-500">
        {{ formattedDatetimeFirst }}
      </div>
      <IconChevron v-if="formattedDatetimeSecond" class="text-grey-500" />
      <div class="tracking-wide">
        {{ formattedDatetimeSecond }}
      </div>
    </div>
    <div>
      <div v-if="urgency === 'now'" class="flex gap-2">
        <NowBadge />
        <div class="tracking-wide text-grey-500">
          Started {{ formattedStartAtDistance }}
        </div>
      </div>
      <div v-if="urgency === 'soon'" class="flex gap-2">
        <SoonBadge />
        <div class="tracking-wide text-grey-500">
          {{ formattedStartAtDistance }}
        </div>
      </div>
    </div>
  </div>
</template>
