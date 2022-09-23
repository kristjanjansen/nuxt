<script setup lang="ts">
import { parseControls } from "~~/composables/controls";
const { data: events } = useEvents({
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
    <Button small left to="/lab">lab</Button>
    <Title>Event controls</Title>
    <Card v-for="e in events">
      <Stack>
        <Title medium>{{ e.title }}</Title>
        <div class="flex gap-2">
          <Button :href="url(e.id)">Edit in Strapi</Button>
          <Button :to="e.eventExperimentLink" target="_blank">
            Show in experiment view
          </Button>
          <Button :to="e.eventLiveLink" target="_blank">
            Show in audience view
          </Button>
        </div>
        <Controls :controls="parseControls(e.controls)" class="!w-32" />
      </Stack>
    </Card>
  </Stack>
</template>
