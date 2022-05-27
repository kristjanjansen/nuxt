<script setup lang="ts">
const route = useRoute();
useHead({
  titleTemplate: "aaa",
  meta: [{ name: "og:title", content: `elektron - ${route.meta.title}` }],
});
if (process.server) {
  const nuxtApp = useNuxtApp();
  nuxtApp.ssrContext.res.setHeader("ttl", 60);
}
</script>
<template>
  <div>
    <Body class="min-h-screen bg-gray-100 text-gray-900 antialiased" />
    <Nav />
    <slot />
    <div class="border-fg pointer-events-none fixed inset-0 border border-2" />
  </div>
</template>
