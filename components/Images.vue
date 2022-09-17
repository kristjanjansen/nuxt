<script setup lang="ts">
interface Props {
  images: any[];
}
const { images = [] } = defineProps<Props>();
</script>

<template>
  <div class="-mx-4 flex gap-6 overflow-x-auto px-6 md:-mx-6">
    <Image
      v-for="image in images"
      :image="image"
      class="h-72 rounded-3xl object-cover md:h-96 lg:h-[30vw]"
    />
  </div>
</template>
