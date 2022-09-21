<script setup lang="ts">
const sizes = {
  xs: "h4",
  sm: "h3",
  md: "h2",
  lg: "h1",
};

type Props = {
  size?: keyof typeof sizes;
  el?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string;
};

const { size = "md", el, title } = defineProps<Props>();
</script>

<template>
  <component
    v-if="title || $slots.default?.()?.[0].children"
    :is="el || sizes[size]"
    class="ETitle"
    :class="size"
    v-html="title || $slots.default()[0].children"
  />
</template>

<style scoped>
.ETitle {
  font-family: title, sans-serif;
  font-weight: normal;
  line-height: var(--line-height-5xl);
}
.ETitle.xs {
  font-size: var(--text-base);
  line-height: var(--line-height-sm);
}
.ETitle.sm {
  font-size: var(--text-sm);
}
.ETitle.md {
  font-size: var(--text-xl);
}
.ETitle.lg {
  font-size: var(--text-3xl);
}
</style>
