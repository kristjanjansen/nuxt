<script setup lang="ts">
type Props = {
  event: any;
};
const { event } = defineProps<Props>();
const { urgency } = useDatetime(event.start_at, event.end_at);
const { lang } = useLang();

// @TODO Handle past events
// @TODO Handle event.live_url
</script>

<template>
  <Stack class="w-full items-stretch !gap-2" v-if="event.streamkey">
    <NuxtLink
      v-if="event.status === 'FREE' || event.status === 'HAS_TICKET'"
      :to="event.eventLiveLink"
      class="w-full"
    >
      <Button primary>{{
        urgency === "past"
          ? ["Revisit event", "Meenuta üritust"][lang]
          : ["Watch event", "Vaata üritust"][lang]
      }}</Button>
    </NuxtLink>
    <p v-if="event.status === 'HAS_TICKET'" class="text-sm text-gray-300">
      {{ ["You have a ticket", "Sul on ürituse pilet"][lang] }}
    </p>
    <a
      v-if="event.status === 'REQUIRES_TICKET'"
      v-for="ticketLink in event.ticketLinks"
      :href="ticketLink"
      target="_blank"
    >
      <Button>{{ ["Get a ticket", "Osta pilet"][lang] }} </Button>
    </a>
  </Stack>
</template>
