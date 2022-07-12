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
        <div>
          <Title v-if="project.authors" medium class="text-gray-500"
            >{{ project.authors }}
          </Title>
          <Title>
            {{ project.titles[lang] }}
          </Title>
        </div>
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
    <div
      class="grid gap-5 md:grid-cols-[4fr_2fr]"
      v-if="project.details || project.description"
    >
      <Card>
        <div class="grid gap-16 md:grid-cols-[1fr_2fr]">
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
    <Stack v-else class="md:!grid-cols-[300px_auto_3fr_2fr_150px]">
      <EventRow v-for="event in project.events" :event="event" />
    </Stack>
  </Stack>
</template>
