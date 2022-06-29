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
        class="fixed right-4 bottom-10 z-[100] w-[70vw] !gap-2 border border-gray-700 bg-black/80 p-4 backdrop-blur-lg md:left-auto md:w-[20vw]"
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

    <div class="fixed right-4 bottom-0">
      <DockButton @click="edit = !edit" class="!normal-case">
        <div class="flex w-full justify-between gap-2">
          <IconCircle class="text-green-500" />
          <div class="hidden truncate md:block">{{ userName || "&nbsp;" }}</div>
        </div>
      </DockButton>
    </div>
  </div>
</template>
