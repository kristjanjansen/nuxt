<script setup lang="ts">
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
    <Title>Experiments</Title>
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
