<script setup lang="ts">
import { Strapi4RequestParams } from "@nuxtjs/strapi/dist/runtime/types";
import { useNow } from "@vueuse/core";
import { Event } from "~/composables/event";

definePageMeta({
  title: "Some Page",
});

const { data: events } = await useFind("events", {
  sort: ["createdAt:desc"],
  populate: ["projects", "images", "thumbnail"],
});
</script>
<template>
  <Stack class="p-8">
    <Title class="!md:text-6xl !text-4xl">Events</Title>
    <p />
    <Stack>
      <NuxtLink v-for="event in events" :to="'/events/' + event.slug">
        <Card class="grid grid-cols-[1fr_5fr] gap-4 hover:bg-black">
          <div>
            <Image
              class="aspect-square h-full object-cover"
              :image="event.images?.[0]"
            />
          </div>
          <Stack>
            <Title class="text-lg">{{ event.title }}</Title>
            <Markdown :markdown="event.intro" />
          </Stack>
        </Card>
      </NuxtLink>
    </Stack>
  </Stack>
</template>
