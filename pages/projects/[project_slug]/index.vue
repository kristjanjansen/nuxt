<script setup lang="ts">
const route = useRoute();
const slug = route.params.project_slug;

const { data: project, error } = await useProjectBySlug(slug);
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
        <Title>
          {{ project.titles[lang] }}
        </Title>
      </Stack>
      <Title>
        {{ project.intros[lang] }}
      </Title>
    </div>
    <div class="flex gap-5 overflow-x-auto">
      <Image
        class="aspect-auto h-96 rounded-3xl object-cover"
        :class="[project.images.length === 1 ? '!aspect-video' : '']"
        v-for="image in project.images"
        :image="image"
      />
    </div>
    <div class="grid gap-5 md:grid-cols-[4fr_2fr]">
      <Card>
        <div class="grid gap-8 md:grid-cols-[1fr_2fr]">
          <Details :details="parseDetails(project.detailss[lang])" />
          <Content :content="project.descriptions[lang]" />
        </div>
      </Card>
      <Card v-if="project.events">
        <Stack>
          <Title>{{ ["Events", "Sündmused"][lang] }}</Title>
          <EventCard v-for="event in project.events" :event="event" />
        </Stack>
      </Card>
    </div>
  </Stack>
</template>
