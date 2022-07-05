<script setup lang="ts">
import "./styles.css";

const route: any = useRoute();
const siteName = "new.elektron.art";

const titleTemplate = (title = undefined) =>
  title ? `${title} / ${siteName}` : siteName;

useHead({
  titleTemplate,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
  meta: [{ name: "og:title", content: titleTemplate(route.meta.title) }],
});

if (process.server) {
  const nuxtApp = useNuxtApp();
  nuxtApp.ssrContext.event.res.setHeader("ttl", route.meta.ttl || 60 * 10); // 10 minutes
}
plausible.enableAutoPageviews();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
