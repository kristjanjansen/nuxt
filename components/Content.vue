<script setup lang="ts">
type Props = {
  content?: any;
  nolinks?: boolean;
  breakall?: boolean;
};
const {
  content = "",
  nolinks = false,
  breakall = false,
} = defineProps<Props>();

const html = computed(() => {
  return nolinks ? content.replace(/<a[^>]*>(.*?)<\/a>/gi, "$1") : content;
});

const { theme } = useTheme();
</script>

<template>
  <div
    class="content prose prose-lg max-w-none font-sans text-base tracking-wide text-gray-400"
    :class="[
      ['prose-invert', ''][theme],
      breakall ? 'break-all' : 'break-words',
    ]"
    v-html="html"
  />
</template>

<style>
.content a {
  @apply break-all;
}
</style>
