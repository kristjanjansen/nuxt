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
        class="fixed right-4 bottom-10 z-[100] w-[70vw] !gap-2 rounded border border-gray-600 bg-black/80 p-4 backdrop-blur-lg md:left-auto md:w-[30vw]"
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

    <div
      class="fixed right-4 bottom-0 z-[100] w-auto !gap-2 md:left-auto md:w-[20vw]"
    >
      <button
        @click="edit = !edit"
        class="flex h-7 w-full items-center border border-b-0 border-gray-600 bg-black/80 px-2 font-mono text-sm text-gray-400 backdrop-blur-lg transition first:border-l hover:border-gray-500 hover:bg-black/30 hover:text-gray-300"
      >
        <div class="flex w-full justify-between gap-2">
          <div class="hidden truncate md:block">{{ userName || "&nbsp;" }}</div>
          <IconCircle class="text-green-500" />
        </div>
      </button>
    </div>
  </div>
</template>
