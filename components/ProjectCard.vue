<script setup lang="ts">
type Props = {
  project: any;
};
const { project } = defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <Stack>
    <div class="group relative overflow-hidden rounded-2xl">
      <Image
        class="aspect-square h-full object-cover transition group-hover:scale-105 group-hover:blur"
        :image="project.thumbnail"
      />
      <Stack
        class="absolute inset-0 bg-black/80 p-4 opacity-0 transition group-hover:opacity-100"
      >
        <Stack class="!gap-1">
          <Title small v-if="project.authors">
            {{ project.authors }}
          </Title>
          <Title>
            {{ project.titles[lang] }}
          </Title>
        </Stack>
        <Content :content="project.intros[lang]" />
      </Stack>
    </div>
    <Stack class="block md:hidden">
      <Stack class="!gap-1">
        <Title medium v-if="project.authors" class="text-grey-500">
          {{ project.authors }}
        </Title>
        <Title>
          {{ project.titles[lang] }}
        </Title>
      </Stack>
      <Content :content="project.intros[lang]" /> </Stack
  ></Stack>
</template>
