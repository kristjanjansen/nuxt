<script setup lang="ts">
import IconCircle from "~icons/ph/circle-fill";
import IconClose from "~icons/radix-icons/cross-2";

const userName = useUserName();
const edit = ref(false);
const textarea = ref<any>(null);
</script>

<template>
  <div>
    <FadeTransition>
      <Stack
        v-show="edit"
        class="fixed right-4 bottom-12 z-[100] w-[70vw] !gap-2 border border-gray-700 bg-black/80 p-4 backdrop-blur-lg md:left-auto"
      >
        <div class="text-sm text-gray-300">Your name</div>
        <Textarea ref="textarea" v-model="userName" class="text-sm" />
        <button class="absolute top-2 right-2">
          <IconClose
            @click="edit = false"
            class="text-gray-500 transition hover:text-gray-400"
          />
        </button>
      </Stack>
    </FadeTransition>

    <DockButton
      @click="edit = !edit"
      class="md:justify-left !md:px-2 flex w-8 justify-center gap-2 !px-2 !normal-case md:w-[15vw]"
    >
      <IconCircle class="shrink-0 scale-75 text-green-500" />
      <div class="hidden truncate md:block">{{ userName || "&nbsp;" }}</div>
    </DockButton>
  </div>
</template>
