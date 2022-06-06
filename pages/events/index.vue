<script setup lang="ts">
import { Strapi4RequestParams } from "@nuxtjs/strapi/dist/runtime/types";
import { useNow } from "@vueuse/core";
import { Event } from "~/composables/event";

definePageMeta({
  title: "Some Page",
});

const useStrapiFind = (contentType: string, params?: Strapi4RequestParams) => {
  const { find } = useStrapi4();
  return useAsyncData(contentType, () =>
    find(contentType, params).then(({ data }) => {
      data.map(({ attributes }) => attributes);
    })
  );
};
// // data, pending, refresh, error
const { data: events } = useStrapiFind("events", {
  sort: ["createdAt:desc"],
  populate: "*",
});
// const a = await useAsyncData("hello", () => $fetch("/api/hello"));
</script>
<template>
  <Stack class="p-8">
    <Title class="!md:text-6xl !text-4xl">Events</Title>
    <p />
    <Stack>
      <NuxtLink v-for="event in events" :to="'/events/' + event.slug">
        <Card class="hover:bg-black">
          <Stack>
            <Title class="text-lg">{{ event.title }}</Title>
            <pre>{{ event }}</pre>
            <Markdown strip :markdown="event?.description_estonian" />
          </Stack>
        </Card>
      </NuxtLink>
    </Stack>
  </Stack>
</template>
