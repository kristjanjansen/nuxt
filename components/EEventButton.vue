<script setup lang="ts">
import IconArrowRight from "~icons/radix-icons/arrow-right";

type Props = {
  event: any;
};

const { event } = defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <NuxtLink
    v-if="event.status === 'FREE' || event.status === 'HAS_TICKET'"
    :to="event.eventLiveLink"
  >
    <EButton size="xs" el="a" color="transparent">
      <IconArrowRight />
      {{ ["Watch event", "Vaata üritust"][lang] }}
    </EButton>
  </NuxtLink>
  <p v-if="event.status === 'HAS_TICKET'">
    {{ ["You have a ticket", "Sul on ürituse pilet"][lang] }}
  </p>
  <EButton
    v-if="event.status === 'REQUIRES_TICKET'"
    v-for="ticketLink in event.ticketLinks"
    :href="ticketLink"
    el="a"
    size="xs"
    color="accent"
    target="_blank"
  >
    <IconArrowRight />
    {{ ["Get a ticket", "Osta pilet"][lang] }}
  </EButton>
</template>
