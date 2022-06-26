<script setup lang="ts">
const route = useRoute();
const slug = route.params.project_slug;

const { data: project, error } = await useProjectsBySlug(slug);
const { lang } = useLang();

const parseUrls = (str) => {
  return str.replace(
    /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/gi,
    `<a href='$1' target='_blank'>$3</a>`
  );
};
const a = project.value.detailss[0]
  .replace(/<\/?p>/g, "")
  .split("<br>")
  .map((el) =>
    el
      .split(/:(.*)/s)
      .map((s) => s.trim())
      .filter((s) => s)
      .map((s) => parseUrls(s))
  );
console.log(Object.fromEntries(a));
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
        <div class="grid gap-4 md:grid-cols-[1fr_3fr]">
          <div
            class="text-sm leading-loose tracking-wide text-gray-400"
            v-html="project.detailss[lang]"
          />
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
