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
  <Stack v-if="files" class="p-4 md:p-6">
    <Button small left to="/lab">lab</Button>
    <Flex class="md:justify-between">
      <Title>Recent experiments</Title>
      <Button>Show all</Button>
    </Flex>
    <div class="-mx-4 flex gap-4 overflow-x-auto px-6 md:-mx-6">
      <MoveTransition>
        <RouterLink
          v-for="file in files?.slice(0, 10)"
          :key="file.filename"
          :to="'/lab/experiments/' + file.filename"
        >
          <VideoPreview :file="file" />
        </RouterLink>
      </MoveTransition>
    </div>
    <div class="h-8" />
    <div class="grid gap-8 md:grid-cols-[5fr_1fr]">
      <Stack>
        <div class="flex flex-col gap-4 md:flex-row md:items-center">
          <Title>Experiments</Title>
          <Button :href="addUrl">Add new experiment in Strapi</Button>
        </div>
        <Card v-for="e in events">
          <Stack>
            <Title medium>{{ e.title }}</Title>
            <EventDatetime :event="e" />
            <div class="grid gap-8 md:grid-cols-[auto_1fr_1fr]">
              <Stack>
                <Button :href="url(e.id)">Edit in Strapi</Button>
                <Button :to="e.eventExperimentLink" target="_blank">
                  Show in experiment view
                </Button>
                <Button :to="e.eventLiveLink" target="_blank">
                  Show in audience view
                </Button>
              </Stack>
              <Content
                class="h-full overflow-hidden text-gray-500 transition"
                nolinks
                :content="truncate(e.descriptions[0], 800)"
              />
              <Code class="whitespace-pre-wrap">{{ e.controls }}</Code>
            </div>
          </Stack>
        </Card>
      </Stack>
      <Stack v-if="files">
        <Title>Recorded streams</Title>
        <Stack class="!gap-12">
          <!-- <RouterLink
            v-for="file in files.slice(0, 10)"
            :to="'/lab/experiments/' + file.filename"
          >
            <VideoPreview :file="file" />
          </RouterLink> -->
        </Stack>
      </Stack>
    </div>
  </Stack>
</template>
