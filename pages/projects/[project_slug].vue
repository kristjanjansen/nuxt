<script setup lang="ts">
import { useLang } from "../../composables/lang";

const route = useRoute();
const slug = route.params.project_slug;

const { data: project } = await useFindOne("projects", {
  filters: {
    slug: { $eq: slug },
  },
  populate: ["images", "localizations"],
});
const { lang } = useLang();
</script>

<template>
  <Stack class="gap-8 p-12">
    <BackLink to="/projects">
      <div>{{ ["Projects", "Projektid"][lang] }}</div>
    </BackLink>
    <TitleLarge>
      <div v-html="project.titles[lang]" />
    </TitleLarge>
    <div class="flex gap-5 overflow-x-auto">
      <Image
        class="aspect-auto h-72 rounded-3xl object-cover"
        v-for="image in project.images"
        :image="image"
      />
    </div>
    <Markdown :markdown="project.description" />
  </Stack>
</template>
