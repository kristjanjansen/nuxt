<script setup lang="ts">
const route = useRoute();
const id = route.params.video_id;

const videosUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad&type=VIDEO`;
const { data: videos } = await useAsyncData<any[]>("videos", () =>
  $fetch(videosUrl)
);

const video = videos.value
  .map(processVideo)
  .filter((video) => video.id === id)[0];

// const video = {
//   videoUrl:
//     "https://elektron.fra1.cdn.digitaloceanspaces.com/backup/videos/elektron_0_2022-06-14-20.26.01.274-EEST_0_H1LO1.mp4",
//   startDatetime: sub(endDatetime, { seconds: duration }),
//   endDatetime,
//   duration,
// };
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link to="/lab" left>Lab</Link>
    <Title>Experiment in June 2022</Title>
    <LabVideo :video="video" />
  </Stack>
</template>
