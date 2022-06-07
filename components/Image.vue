<script setup lang="ts">
interface Props {
  image: any;
}
const { image = null } = defineProps<Props>();
const format = "medium";
</script>

<template>
  <img
    v-if="image?.formats?.[format]"
    :src="image.formats[format].url"
    :width="image.formats[format].width"
    :height="image.formats[format].height"
    :alt="image.alt"
    loading="lazy"
    decoding="async"
    class="block w-full"
  />
</template>
