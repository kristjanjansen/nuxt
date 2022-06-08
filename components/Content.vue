<script setup lang="ts">
type Props = {
  content?: any;
  nolinks?: boolean;
};
const { content = "", nolinks = false } = defineProps<Props>();

const html = computed(() => {
  return nolinks ? content.replace(/<a[^>]*>(.*?)<\/a>/gi, "$1") : content;
});

const { theme } = useTheme();
</script>

<template>
  <div
    class="prose prose-lg max-w-none break-words font-sans text-base capsize"
    :class="[['prose-invert', ''][theme]]"
    v-html="html"
  />
</template>
