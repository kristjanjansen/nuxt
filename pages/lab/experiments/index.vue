<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";
import { truncate } from "~~/composables/string";
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

const { getFiles } = useFiles();
const { data: files, refresh } = await getFiles("records");

useIntervalFn(refresh, 5000);
</script>

<template>
  <div v-if="!files || !events" />
  <Stack v-else class="p-4 md:p-6">
    <Button small left to="/lab">lab</Button>
    <Flex class="md:justify-between">
      <Title>Recent experiments</Title>
      <Button right to="/lab/experiments/all">Show all experiments</Button>
    </Flex>
    <div class="-mx-4 flex gap-4 overflow-x-auto px-6 md:-mx-6">
      <MoveTransition>
        <RouterLink
          v-for="file in files?.slice(0, 10)"
          :key="file.filename"
          :to="'/lab/experiments/' + file.filename"
        >
          <VideoPreview :file="file" class="w-[20vw]" />
        </RouterLink>
      </MoveTransition>
    </div>
    <div class="h-8" />
    <Stack>
      <Flex class="md:justify-between">
        <Title>Current experiments</Title>
        <Button :href="addUrl">
          <IconStrapi />
          Add new experiment in Strapi
        </Button>
      </Flex>
      <div class="grid gap-4 md:grid-cols-3">
        <Card v-for="e in events">
          <Stack>
            <Title medium>{{ e.title }}</Title>
            <EventDatetime :event="e" />
            <Stack>
              <Button :href="url(e.id)"> <IconStrapi /> Edit in Strapi</Button>
              <Button right :to="e.eventExperimentLink" target="_blank">
                Experiment view
              </Button>
              <Button right :to="e.eventLiveLink" target="_blank">
                Audience view
              </Button>
            </Stack>
            <Code class="whitespace-pre-wrap">{{ e.controls }}</Code>
          </Stack>
        </Card>
      </div>
    </Stack>
  </Stack>
</template>
