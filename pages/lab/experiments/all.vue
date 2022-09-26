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
  <Stack v-else class="p-4 md:p-6">
    <Button small left to="/lab/experiments">Experiments</Button>
    <Flex class="z-10 md:justify-between">
      <Title>All experiments</Title>
      <Flex class="!gap-2">
        <Button left @click="onPrev" />
        <Button right @click="onNext" />
      </Flex>
    </Flex>
    <div class="grid gap-4 md:grid-cols-4 md:pt-12 2xl:grid-cols-6">
      <RouterLink
        v-for="file in pagedFiles"
        :key="file.filename"
        :to="'/lab/experiments/' + file.filename"
      >
        <VideoPreview :file="file" />
      </RouterLink>
    </div>
  </Stack>
</template>
