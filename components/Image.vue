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
  <img
    v-else
    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22/%3E"
    class="block w-full"
  />
</template>
