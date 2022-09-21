<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import IconMenu from "~icons/radix-icons/drag-handle-horizontal";

const { theme, changeTheme } = useTheme();
const { lang, changeLang } = useLang();
const menu = ref(false);
</script>

<template>
  <div class="sticky top-0 z-10">
    <div
      class="grid grid-cols-1 bg-black/90 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_0.3fr_0.3fr]"
    >
      <div
        class="flex h-9 w-full items-center justify-between border border-grey-700"
      >
        <NuxtLink
          to="/"
          class="flex h-9 items-center px-2 font-title text-2xl lowercase text-grey-400"
          @click="menu = false"
        >
          eˉlektron
        </NuxtLink>
        <button
          class="flex h-9 w-10 items-center justify-center border-l border-grey-700 font-mono text-grey-400 md:hidden"
          @click="menu = !menu"
        >
          <IconMenu />
        </button>
      </div>
      <NuxtLink
        to="/schedule"
        class="md:block"
        :class="[menu ? 'block' : 'hidden']"
        @click="menu = false"
      >
        <NavButton>{{ ["Schedule", "Kava"][lang] }}</NavButton>
      </NuxtLink>
      <NuxtLink
        to="/projects"
        class="md:block"
        :class="[menu ? 'block' : 'hidden']"
        @click="menu = false"
      >
        <NavButton>{{ ["projects", "projektid"][lang] }}</NavButton>
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="md:block"
        :class="[menu ? 'block' : 'hidden']"
        @click="menu = false"
      >
        <NavButton>{{ ["WTF elektron", "Meist"][lang] }}</NavButton>
      </NuxtLink>
      <NuxtLink
        to="/signal"
        class="md:block"
        :class="[menu ? 'block' : 'hidden']"
        @click="menu = false"
      >
        <NavButton>{{ ["Podcast", "Taskuhääling"][lang] }}</NavButton>
      </NuxtLink>
      <NuxtLink
        to="/lab"
        class="md:block"
        :class="[menu ? 'block' : 'hidden']"
        @click="menu = false"
      >
        <NavButton>{{ ["Lab", "Labor"][lang] }}</NavButton>
      </NuxtLink>
      <button
        @click="
          () => {
            changeLang();
            menu = false;
          }
        "
        class="text-left md:block"
        :class="[menu ? 'block' : 'hidden']"
      >
        <NavButton>{{ ["eng", "est"][lang] }}</NavButton>
      </button>
      <button
        @click="
          () => {
            changeTheme();
            menu = false;
          }
        "
        class="text-left md:block"
        :class="[menu ? 'block' : 'hidden']"
      >
        <NavButton>
          {{ [["Nite", "Öö"][lang], ["Day", "Päev"][lang]][theme] }}
        </NavButton>
      </button>
    </div>
    <NavEvent />
  </div>
</template>
