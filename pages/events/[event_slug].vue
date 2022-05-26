<script setup lang="ts">
const route = useRoute();
const slug = route.params.event_slug;
const { find } = useStrapi3(); //

// // data, pending, refresh, error
const { data: event } = await useAsyncData(`events/${slug}`, () =>
  find<any>("events", { slug }).then((events) => events[0])
);
</script>

<template>
  <Stack class="debug p-12">
    <Title>{{ event.title }}</Title>
    <Markdown :markdown="event.description_estonian" />
  </Stack>
</template>
