<script setup lang="ts">
type Props = {
  draggables: any;
};
const { draggables } = defineProps<Props>();
const { idle } = useIdle(5000);
const { lang } = useLang();
</script>

<template>
  <FadeTransition>
    <div v-if="!idle" class="fixed bottom-0 left-4 z-[100] flex">
      <DockButton
        v-for="(draggable, key) in draggables"
        @click="draggable.setDocked"
        :class="draggable.getDocked() ? '!bg-gray-800' : ''"
        >{{
          String(draggable.titles ? draggable.titles[lang] : key).replace(
            /_/g,
            " "
          )
        }}
      </DockButton>
    </div>
  </FadeTransition>
</template>
