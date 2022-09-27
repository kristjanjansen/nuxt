<script setup lang="ts">
const nuxtApp = useNuxtApp();
const experimentsRoutes = useRouter().options.routes.filter(
  (r) => r.meta?.labTitle && r.meta?.labGroup === "Experiments"
);
const routes = useRouter().options.routes.filter(
  (r) => r.meta?.labTitle && r.meta?.labGroup !== "Experiments"
);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Experiments</Title>
    <div class="grid grid-cols-4 gap-4">
      <LinkCard
        v-for="route in experimentsRoutes"
        :to="route.path"
        class="aspect-video pr-8"
      >
        <Title small>{{ route.meta.labTitle }}</Title>
        <div v-if="route.meta.labIntro" class="tracking-wide text-gray-500">
          {{ route.meta.labIntro }}
        </div>
      </LinkCard>
    </div>
    <Title>Other lab work</Title>
    <div class="grid grid-cols-4 gap-4">
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
    <Code>{{ routes }}</Code>
  </Stack>
</template>
