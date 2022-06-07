<script setup lang="ts">
import { useMediaControls } from "@vueuse/core";
import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";

const video = ref();
const src =
  "https://fra1.digitaloceanspaces.com/elektron/strapi/0ea3ff8704a2e6b444d3fe442532923e.mp4";

const { muted, volume } = useMediaControls(video, {
  src,
});
onMounted(() => (muted.value = true));
const { theme } = useTheme();

const { data: frontpage } = await $fetch(
  "https://strapi4.elektron.art/api/frontpage?populate=*"
);
const descriptionEn =
  frontpage.attributes.localizations.data[0].attributes.description;
const descriptionEt = frontpage.attributes.description;

const { lang } = useLang();
const description = computed(() => {
  return [descriptionEn, descriptionEt][lang.value];
});
</script>

<template>
  <div class="relative h-full">
    <video
      ref="video"
      loop
      muted
      controls
      autoplay
      playsinline
      class="absolute inset-0 h-full w-full flex-col object-cover opacity-20"
      :class="[['', 'invert'][theme]]"
    />
    <Markdown
      class="absolute top-8 left-8 right-8 text-xl md:right-auto md:text-2xl"
      :markdown="description"
    />
    <button class="absolute bottom-8 left-8" @click="muted = !muted">
      <IconMuted v-if="muted" />
      <IconUnmuted v-if="!muted" />
    </button>
  </div>
</template>
