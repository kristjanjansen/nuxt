<script setup lang="ts">
// @TODO: rror handling
const route = useRoute();
const slug = (route.params.page_slug as string).toLowerCase();
const data = await $fetch(
  `https://strapi4.elektron.art/api/pages?populate=*&filters[slug]=${slug}`
);
const page = parseStrapi(data)[0];
// @TODO: Revese to [en,et]
const titles = [page.localizations[0].title, page.title].map(parseMarkdown);
const contents = [page.localizations[0].content, page.content].map(
  parseMarkdown
);
const { lang } = useLang();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/about">
      {{ ["WTF Elektron", "Meis"][lang] }}
    </Link>
    <Title>{{ titles[lang] }}</Title>
    <Content :content="contents[lang]" class="max-w-[70ch]" />
  </Stack>
</template>
