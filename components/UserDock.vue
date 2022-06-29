<script setup lang="ts">
import { MaybeElementRef, useFocus } from "@vueuse/core";
import { Ref } from "vue";
import IconCircle from "~icons/ph/circle-fill";
import IconClose from "~icons/radix-icons/cross-2";
const userName = useUserName();
const edit = ref(false);
const textarea = ref<any>(null);
</script>

<template>
  <Stack class="fixed right-4 bottom-0 w-64">
    <Fade>
      <Stack
        v-show="edit"
        class="relative w-full !gap-1 rounded border border-gray-600 bg-black/50 p-4"
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
    </Fade>
    <button
      @click="edit = !edit"
      class="flex w-full border border-b-0 border-gray-600 bg-black/50 py-2 px-4 font-mono text-sm text-gray-400 transition first:border-l hover:bg-black/30"
    >
      <div class="flex w-full justify-between gap-2">
        <div class="truncate">{{ userName || "&nbsp;" }}</div>
        <IconCircle class="text-green-500" />
      </div>
    </button>
  </Stack>
</template>
