<script setup lang="ts">
const { getFiles } = useFiles();
const { data: files } = await getFiles("records");
const PAGE_SIZE = 24;
const page = ref(0);
const onPrev = () => {
  if (page.value > 0) {
    page.value--;
  }
};
const onNext = () => {
  page.value++;
};
const pagedFiles = computed(() =>
  files.value?.slice(page.value * PAGE_SIZE, page.value * PAGE_SIZE + PAGE_SIZE)
);
</script>

<template>
  <div v-if="!files" />
  <div v-else>
    <Stack class="sticky top-9 z-10 bg-black/90 bg-black backdrop-blur md:p-6">
      <Button small left to="/lab/experiments">Experiments</Button>
      <Flex class="z-10 md:justify-between">
        <Title>All experiments</Title>
        <Flex class="!gap-2">
          <Button left @click="onPrev" />
          <Button right @click="onNext" />
        </Flex>
      </Flex>
    </Stack>
    <div class="grid gap-4 p-4 md:grid-cols-3 md:p-6 md:pt-12 lg:grid-cols-4">
      <RouterLink
        v-for="file in pagedFiles"
        :key="file.filename"
        :to="'/lab/experiments/' + file.filename"
      >
        <VideoPreview :file="file" />
      </RouterLink>
    </div>
  </div>
</template>
