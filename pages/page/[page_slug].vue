<script setup lang="ts">
// @TODO: rror handling
const route = useRoute();
const slug = (route.params.page_slug as string).toLowerCase();
const { data: page, error } = await usePageBySlug(slug);

const { lang } = useLang();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/about">
      {{ ["WTF Elektron", "Meist"][lang] }}
    </Button>
    <Title>{{ page.titles[lang] }}</Title>
    <Content :content="page.contents[lang]" class="max-w-[70ch]" />
  </Stack>
</template>
