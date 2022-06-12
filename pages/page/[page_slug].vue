<script setup lang="ts">
const route = useRoute();
const slug = route.params.page_slug;
const { lang } = useLang();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/about">
      {{ ["WTF Elektron", "Meis"][lang] }}
    </Link>
    <Title>{{ slug }}</Title>
    <p>TBD</p>
  </Stack>
</template>
