<script setup lang="ts">
import { MaybeRef } from "@vueuse/core";
import { marked } from "marked";

type Props = {
  markdown?: MaybeRef<string>;
  nolinks?: boolean;
};
const { markdown = "", nolinks = false } = defineProps<Props>();

const parsedMarkdown = computed(() => {
  const parsed = marked.parse(ref(markdown).value, { breaks: true });
  return nolinks ? parsed.replace(/<a[^>]*>(.*?)<\/a>/gi, "$1") : parsed;
});

const { theme } = useTheme();
</script>

<template>
  <div
    class="prose prose-lg max-w-none break-words font-sans text-base capsize"
    :class="[['prose-invert', ''][theme]]"
    v-html="parsedMarkdown"
  />
</template>
