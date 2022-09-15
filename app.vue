<script setup lang="ts">
import "./styles.css";
import "./estyles.css";

const route: any = useRoute();
const siteName = "elektron.art";

const titleTemplate = (title = undefined) =>
  title ? `${title} / ${siteName}` : siteName;

useHead({
  titleTemplate,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
  meta: [{ name: "og:title", content: titleTemplate(route.meta.title) }],
});

// Uncomment when using Netifly on-demand builder
// https://nitro.unjs.io/deploy/providers/netlify#on-demand-builders

// if (process.server) {
//   const nuxtApp = useNuxtApp();
//   nuxtApp.ssrContext.event.res.setHeader("ttl", route.meta.ttl || 60 * 10); // 10 minutes
// }
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
