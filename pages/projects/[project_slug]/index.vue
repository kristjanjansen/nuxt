<script setup lang="ts">
const route = useRoute();
const slug = route.params.project_slug;

const { data: project, error } = await useProjectBySlug(slug as string);
const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack v-else class="gap-8 p-4 md:p-6">
    <div class="grid gap-8 md:grid-cols-[2fr_4fr]">
      <Stack>
        <Link left to="/projects">
          {{ ["Projects", "Projektid"][lang] }}
        </Link>
        <div>
          <Title v-if="project.authors" medium class="text-gray-500">
            {{ project.authors }}
          </Title>
          <Title>
            {{ project.titles[lang] }}
          </Title>
        </div>
      </Stack>
      <Subtitle class="max-w-[64ch]">{{ project.intros[lang] }} </Subtitle>
    </div>
    <Images :images="project.images" />
    <div
      class="grid gap-5 md:grid-cols-[4fr_2fr]"
      v-if="project.details || project.description"
    >
      <Card>
        <div class="grid gap-16 md:grid-cols-[1fr_2fr]">
          <Details :details="parseDetails(project.detailss[lang])" />
          <Content :content="project.descriptions[lang]" class="max-w-[64ch]" />
        </div>
      </Card>
      <Card v-if="project.events">
        <Stack class="gap-8">
          <Title class="text-gray-400">{{
            ["Events", "Sündmused"][lang]
          }}</Title>
          <EventCard v-for="event in project.events" :event="event" />
        </Stack>
      </Card>
    </div>
    <Stack v-else class="md:!grid-cols-[300px_auto_3fr_2fr_150px]">
      <EventRow v-for="event in project.events" :event="event" />
    </Stack>
  </Stack>
</template>
