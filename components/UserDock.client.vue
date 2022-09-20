<script setup lang="ts">
import IconCircle from "~icons/ph/circle-fill";
import IconClose from "~icons/radix-icons/cross-2";

const userName = useUserName();
const edit = ref(false);
const textarea = ref<any>(null);
const { lang } = useLang();
</script>

<template>
  <div>
    <FadeTransition>
      <div
        v-show="edit"
        class="fixed right-4 bottom-9 z-[100] w-[70vw] !gap-2 border border-gray-700 bg-black/80 backdrop-blur-lg md:left-auto md:w-[20vw]"
      >
        <div class="flex h-7 items-center justify-between px-2">
          <div class="font-mono text-xs uppercase tracking-wide">
            {{ ["Chat", "Jututuba"][lang] }}
          </div>
          <button @click="edit = false">
            <IconClose
              class="translate-x-1 text-gray-500 transition hover:text-gray-400"
            />
          </button>
        </div>
        <Stack class="!gap-1 !p-4">
          <div class="text-sm tracking-wide text-gray-300">Your name</div>
          <Textarea ref="textarea" v-model="userName" class="text-sm" />
        </Stack>
      </div>
    </FadeTransition>

    <div class="fixed right-4 bottom-0 z-50">
      <DockButton @click="edit = !edit" class="!normal-case">
        <div class="flex w-full justify-between gap-2">
          <div class="hidden truncate md:block">{{ userName || "&nbsp;" }}</div>
          <IconCircle class="text-green-500" />
        </div>
      </DockButton>
    </div>
  </div>
</template>
