<script setup lang="ts">
const route = useRoute();
const slug = route.params.project_slug;

const { data: project } = await useProjectsBySlug(slug);
const { lang } = useLang();
</script>

<template>
  <Stack class="gap-8 p-3 md:p-5">
    <div class="grid gap-8 md:grid-cols-[1fr_3fr]">
      <Stack>
        <Link left to="/projects">
          {{ ["Projects", "Projektid"][lang] }}
        </Link>
        <Title>
          {{ project.titles[lang] }}
        </Title>
      </Stack>
      <Title class="text-xl md:text-2xl">
        {{ project.intros[lang] }}
      </Title>
    </div>
    <div class="flex gap-5 overflow-x-auto">
      <Image
        class="aspect-auto h-72 rounded-3xl object-cover"
        v-for="image in project.images"
        :image="image"
      />
    </div>
    <div class="grid gap-5 md:grid-cols-[2fr_1fr]">
      <Card>
        <div class="grid gap-4 md:grid-cols-[1fr_3fr]">
          <div
            class="text-gray-400 text-xs leading-loose"
            v-html="project.detailss[lang].replace(/\n/g, '<br>')"
          />
          <Markdown :markdown="project.descriptions[lang]" />
        </div>
      </Card>
      <ProjectEvents v-if="project.events" :project="project" />
    </div>
  </Stack>
</template>
