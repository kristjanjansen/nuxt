<script setup lang="ts">
import { marked } from "marked";
type Props = {
  markdown?: string;
};
const { markdown = "" } = defineProps<Props>();
const slots = useSlots();
const renderedMarkdown = marked.parse(
  markdown || slots.default?.()?.[0].children || "",
  { breaks: true }
);
const { theme } = useTheme();
</script>

<template>
  <div
    class="prose font-sans text-base capsize"
    :class="[['prose-invert', ''][theme]]"
    v-html="renderedMarkdown"
  />
</template>
