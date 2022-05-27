<script setup lang="ts">
import { marked } from "marked";
type Props = {
  markdown?: string;
  strip?: boolean;
};
const { markdown = "", strip = false } = defineProps<Props>();

const parsedMarkdown = marked.parse(markdown, { breaks: true });

const finalMarkdown = strip
  ? parsedMarkdown.replace(/(<([^>]+)>)/gi, "")
  : parsedMarkdown;
const { theme } = useTheme();
</script>

<template>
  <div
    class="prose font-sans text-base capsize"
    :class="[['prose-invert', ''][theme]]"
    v-html="finalMarkdown"
  />
</template>
