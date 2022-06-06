<script setup lang="ts">
import { useElementSize } from "@vueuse/core";

interface Props {
  image: any;
}
const { image = null } = defineProps<Props>();

const el = ref(null);
const { width } = useElementSize(el);

const format: any = computed(() => {
  if (!image?.formats) {
    return null;
  }
  const devicePixelRatio = window.devicePixelRatio || 1;
  const formats = Object.values(image.formats);
  const nearestWidth = nearest(
    formats.map(({ width }) => width),
    width.value * devicePixelRatio
  );
  return formats.filter((f: any) => f.width === nearestWidth)?.[0];
});
</script>

<template>
  <img
    v-if="format"
    ref="el"
    :src="format.url"
    :width="format.width"
    :height="format.height"
    :alt="image.alt"
    loading="lazy"
    decoding="async"
    class="block w-full"
  />
</template>
