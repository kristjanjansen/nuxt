<script setup lang="ts">
import { marked } from "marked";
type Props = {
  markdown?: string;
};
const { markdown = "" } = defineProps<Props>();
const renderedMarkdown = marked.parse(markdown, { breaks: true });
const { theme } = useTheme();
</script>

<template>
  <div>
    <div :class="[['prose-invert', ''][theme]]" v-html="markdown" />
  </div>
</template>
