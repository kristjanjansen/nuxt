<script setup lang="ts">
type Props = {
  project: any;
};
defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <Card class="p-0">
    <Title class="p-4">{{ ["Events", "Sündmused"][lang] }}</Title>
    <Stack>
      <NuxtLink
        v-for="event in project.events"
        :to="'/events/' + event.slug"
        class="flex gap-4 p-4 transition-all hover:bg-gray-900"
      >
        <div class="aspect-square h-20 w-20 flex-shrink-0">
          <Image
            class="h-full rounded-lg object-cover"
            :image="event.thumbnail || project.thumbnail"
          />
        </div>
        <Stack>
          <TitleSmall>{{ event.title }}</TitleSmall>
          <!-- <pre>{{ event }}</pre> -->
          <Markdown
            class="text-gray-500"
            nolinks
            :markdown="(event.intro || event.description).slice(0, 90)"
          />
        </Stack>
      </NuxtLink>
    </Stack>
  </Card>
</template>
