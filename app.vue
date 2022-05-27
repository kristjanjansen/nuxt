<script setup lang="ts">
import "./app.css";

const route = useRoute();
const siteName = "elektron.art";

const titleTemplate = (title = undefined) =>
  title ? `${title} / ${siteName}` : siteName;

useHead({
  titleTemplate,
  meta: [{ name: "og:title", content: titleTemplate(route.meta.title) }],
});

if (process.server) {
  const nuxtApp = useNuxtApp();
  nuxtApp.ssrContext.res.setHeader("ttl", route.meta.ttl || 60 * 10); // 10 minutes
}
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
