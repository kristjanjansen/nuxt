<script setup lang="ts">
type Props = {
  draggables: any;
};
const { draggables } = defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <div class="fixed bottom-0 left-4 z-[100] flex">
    <DockButton
      v-for="(draggable, key) in draggables"
      @click="draggable.setDocked"
      :class="draggable.getDocked() ? '!bg-gray-500/50 !text-gray-200' : ''"
      v-html="draggable.titles ? draggable.titles[lang] : key"
    >
    </DockButton>
  </div>
</template>
