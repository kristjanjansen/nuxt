<script setup lang="ts">
import { groups } from "d3";

const labTitles = ["Experiments", "Tools", "Video", "Other lab work"];
const labPages = Object.fromEntries(
  groups(
    useRouter()
      .options.routes.filter((r) => r.meta?.labTitle)
      .map((r) => {
        if (r.meta?.labGroup === "" || r.meta?.labGroup === undefined) {
          r.meta.labGroup = "Other lab work";
        }
        return r;
      }),
    (r) => r.meta?.labGroup
  )
);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <template
      v-for="[labTitle, routes] in labTitles.map((labTitle) => [
        labTitle,
        labPages[labTitle],
      ])"
    >
      <div class="h-4" />
      <Title>{{ labTitle }}</Title>
      <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        <LinkCard
          v-for="route in routes"
          :to="route.path"
          class="aspect-video pr-8"
        >
          <Title small>{{ route.meta.labTitle }}</Title>
          <div v-if="route.meta.labIntro" class="tracking-wide text-gray-500">
            {{ route.meta.labIntro }}
          </div>
        </LinkCard>
      </div>
    </template>
  </Stack>
</template>
