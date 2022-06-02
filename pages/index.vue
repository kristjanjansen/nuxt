<script setup lang="ts">
const src =
  "https://fra1.digitaloceanspaces.com/elektron/strapi/0ea3ff8704a2e6b444d3fe442532923e.mp4";
const { theme } = useTheme();
</script>

<template>
  <div class="relative h-full">
    <video
      :src="src"
      loop
      muted
      autoplay
      class="absolute inset-0 h-full w-full flex-col object-cover opacity-70"
      :class="[['', 'invert'][theme]]"
    />
  </div>
</template>
