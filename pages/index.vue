<script setup lang="ts">
import { useNow } from "@vueuse/core";
import { Event } from "~/composables/event";

definePageMeta({
  title: "Some Page",
});

const { find } = useStrapi3();

// // data, pending, refresh, error
const { data: events } = await useAsyncData("events", () =>
  find<Event[]>("events", { _limit: -1 }).then((events) =>
    events.reverse().slice(0, 10)
  )
);

// const a = await useAsyncData("hello", () => $fetch("/api/hello"));
</script>
<template>
  <Stack class="p-8">
    <Title class="!text-6xl">elektron.art</Title>
    <Markdown>Hello *world*</Markdown>
    <Stack>
      <NuxtLink v-for="event in events" :to="'/events/' + event.slug">
        <Card class="hover:bg-gray-900/5">
          <Stack>
            <Title class="text-lg">{{ event.title }}</Title>
            <Markdown strip :markdown="event?.description_estonian" />
          </Stack>
        </Card>
      </NuxtLink>
    </Stack>
  </Stack>
</template>
