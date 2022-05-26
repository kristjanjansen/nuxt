<script setup lang="ts">
import { useNow } from "@vueuse/core";

const now = useNow();

const { find } = useStrapi3(); //

// // data, pending, refresh, error
const { data: events } = await useAsyncData("events", () =>
  find<any>("events", { _limit: -1 }).then((events) =>
    events.reverse().slice(1, 2)
  )
);

// const a = await useAsyncData("hello", () => $fetch("/api/hello"));
</script>
<template>
  <Stack class="p-8">
    <Title>elektron</Title>
    <p>{{ now }}</p>
    <Markdown>Hello *world*</Markdown>
    <Stack>
      <NuxtLink v-for="event in events" :to="'/events/' + event.slug">
        <Card class="hover:bg-gray-900/5">
          <Stack>
            <Title class="text-lg">{{ event.title }}</Title>
            <Markdown
              :markdown="event?.description_estonian.slice(0, 100) + '...'"
            />
          </Stack>
        </Card>
      </NuxtLink>
    </Stack>
  </Stack>
</template>
