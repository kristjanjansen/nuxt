<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";

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
const formatVideo = (file) =>
  formatData({
    Start: file.start_at_formatted,
    End: file.end_at_formatted,
    Duration: file.duration_formatted,
  });
useIntervalFn(refresh, 5000);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">lab</Button>
    <div class="grid grid-cols-[2fr_1fr] gap-4">
      <Stack>
        <div class="flex items-center gap-4">
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
            <Code class="whitespace-pre-wrap">{{ e.controls }}</Code>
          </Stack>
        </Card>
      </Stack>
      <Stack v-if="files">
        <Title>Recorded streams</Title>
        <Card v-for="file in files">
          <Stack>
            <video :src="file.src" controls class="aspect-video" />
            <Code>
              {{ formatVideo(file) }}
            </Code>
            <Button :to="'/lab/experiments/' + file.filename">
              Go to stream
            </Button>
          </Stack>
        </Card>
      </Stack>
    </div>
  </Stack>
</template>

<!--white

  <script setup lang="ts">
import { useIntervalFn } from "@vueuse/shared";

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
const formatVideo = (file) => {
  return [
    `Stars at   ${file.start_at_formatted} ${
      useFormattedDistance(new Date(file.start_at)).value
    }`,
    `Ends at    ${file.end_at_formatted}`,
    `Duration   ${file.duration_formatted}`,
  ].join("\n");
};
useIntervalFn(refresh, 5000);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">lab</Button>
    <div class="grid grid-cols-[2fr_1fr] gap-4">
      <Stack>
        <div class="flex items-center gap-4">
          <Title>Experiments</Title>
          <Button primary :href="addUrl">Add new experiment in Strapi</Button>
        </div>
        <Card v-for="e in events">
          <Stack>
            <Title medium>{{ e.title }}</Title>
            <div class="flex gap-4">
              <Button :href="url(e.id)">Edit in Strapi</Button>
              <Button :to="e.eventExperimentLink" target="_blank">
                Show in experiment view
              </Button>
              <Button :to="e.eventLiveLink" target="_blank">
                Show in audience view
              </Button>
            </div>
            <Code class="whitespace-pre-wrap">{{ e.controls }}</Code>
          </Stack>
        </Card>
      </Stack>
      <Stack v-if="files">
        <Title>Records</Title>
        <Card v-for="file in files">
          <Stack>
            <video :src="file.src" controls class="aspect-video" />
            <Code>
              {{ formatVideo(file) }}
            </Code>
            <Button :to="'/lab/experiments/' + file.filename">
              Go to video
            </Button>
          </Stack>
        </Card>
      </Stack>
    </div>
  </Stack>
</template>


-->
