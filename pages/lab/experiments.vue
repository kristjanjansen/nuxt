<script setup lang="ts">
const { data: events } = useEvents({
  sort: ["start_at:desc"],
  filters: {
    controls: { $notNull: true, $ne: "" },
  },
});
const url = (id) =>
  `https://strapi4.elektron.art/admin/content-manager/collectionType/api::event.event/${id}?plugins[i18n][locale]=en`;
const addUrl =
  "https://strapi4.elektron.art/admin/content-manager/collectionType/api::event.event";
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">lab</Button>
    <div class="flex w-full justify-between">
      <Title>Experiments</Title>
      <Button :href="addUrl">Add new experiment in Strapi</Button>
    </div>
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
        <pre class="text-sm text-gray-500">{{ e.controls }}</pre>
      </Stack>
    </Card>
  </Stack>
</template>
