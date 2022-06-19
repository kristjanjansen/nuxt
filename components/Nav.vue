<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import IconMenu from "~icons/radix-icons/drag-handle-horizontal";

const { theme, changeTheme } = useTheme();
const { lang, changeLang } = useLang();
const menu = ref(false);

const showNav = ref(false);
const { Ctrl_N } = useMagicKeys();
whenever(Ctrl_N, () => (showNav.value = !showNav.value));
</script>

<template>
  <div
    class="sticky top-0 z-50 grid grid-cols-1 bg-black/90"
    :class="[
      showNav
        ? 'md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_0.5fr_0.5fr]'
        : 'md:grid-cols-[auto_1fr_6ch_6ch]',
    ]"
  >
    <div
      class="flex h-10 w-full items-center justify-between border-b border-r border-gray-700 md:border-l"
    >
      <NuxtLink
        to="/"
        class="flex h-10 items-center px-2 font-title text-2xl font-normal lowercase"
        @click="menu = false"
      >
        eˉlektron
      </NuxtLink>
      <button
        class="block flex h-10 w-10 items-center justify-center border-l border-gray-700 font-mono md:hidden"
        @click="menu = !menu"
      >
        <IconMenu />
      </button>
    </div>
    <NuxtLink
      v-if="showNav"
      to="/schedule"
      class="md:block"
      :class="[menu ? 'block' : 'hidden']"
      @click="menu = false"
    >
      <NavLink>{{ ["Schedule", "Kava"][lang] }}</NavLink>
    </NuxtLink>
    <NuxtLink
      v-if="showNav"
      to="/projects"
      class="md:block"
      :class="[menu ? 'block' : 'hidden']"
      @click="menu = false"
    >
      <NavLink>{{ ["projects", "projektid"][lang] }}</NavLink>
    </NuxtLink>
    <NuxtLink
      v-if="showNav"
      to="/about"
      class="md:block"
      :class="[menu ? 'block' : 'hidden']"
      @click="menu = false"
    >
      <NavLink>{{ ["WTF elektron", "Meist"][lang] }}</NavLink>
    </NuxtLink>
    <NuxtLink
      v-if="showNav"
      to="/podcast"
      class="md:block"
      :class="[menu ? 'block' : 'hidden']"
      @click="menu = false"
    >
      <NavLink>{{ ["podcast", "podcast"][lang] }}</NavLink>
    </NuxtLink>
    <NuxtLink
      to="/lab"
      class="md:block"
      :class="[menu ? 'block' : 'hidden']"
      @click="menu = false"
    >
      <NavLink>{{ ["lab", "lab"][lang] }}</NavLink>
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
      <NavLink>{{ ["eng", "est"][lang] }}</NavLink>
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
      <NavLink>{{ ["night", "day"][theme] }}</NavLink>
    </button>
  </div>
</template>
