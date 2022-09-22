<script setup lang="ts">
import { parseControls } from "~~/composables/controls";
const { data: events, error } = useEvents({
  sort: ["start_at:desc"],
  filters: {
    controls: { $notNull: true, $ne: "" },
  },
});
const url = (id) =>
  `https://strapi4.elektron.art/admin/content-manager/collectionType/api::event.event/${id}?plugins[i18n][locale]=en`;
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Title>Event controls</Title>
    <Card v-for="e in events">
      <Stack>
        <Title medium>{{ e.title }}</Title>
        <Button :href="url(e.id)">Edit</Button>
        <Controls :controls="parseControls(e.controls)" class="!w-32" />
      </Stack>
    </Card>
  </Stack>
</template>
