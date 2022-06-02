<script setup lang="ts">
import IconTheme from "~icons/radix-icons/half-2";
import IconMenu from "~icons/radix-icons/drag-handle-horizontal";

const { changeTheme } = useTheme();
const { lang, changeLang } = useLang();
const menu = ref(false);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-6">
    <div
      class="flex h-10 w-full items-center justify-between border-b border-r border-gray-700 md:border-l"
    >
      <NuxtLink
        to="/"
        class="flex h-10 items-center px-2 font-normal lowercase font-title text-2xl"
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
      to="/events"
      class="md:block"
      :class="[menu ? 'block' : 'hidden']"
      @click="menu = false"
    >
      <NavLink>{{ ["events", "kava"][lang] }}</NavLink>
    </NuxtLink>
    <NuxtLink
      to="/podcast"
      class="md:block"
      :class="[menu ? 'block' : 'hidden']"
      @click="menu = false"
    >
      <NavLink>{{ ["podcast", "podcast"][lang] }}</NavLink>
    </NuxtLink>
    <button
      @click="changeLang"
      class="text-left md:block"
      :class="[menu ? 'block' : 'hidden']"
    >
      <NavLink>{{ ["en", "et"][lang] }}</NavLink>
    </button>
    <button
      @click="changeTheme"
      class="text-left md:block"
      :class="[menu ? 'block' : 'hidden']"
    >
      <NavLink><IconTheme /></NavLink>
    </button>
    <NavLink class="text-left md:block" :class="[menu ? 'block' : 'hidden']">
      <Test />
    </NavLink>
  </div>
</template>
