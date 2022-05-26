<script setup lang="ts">
import { useCssVar } from "@vueuse/core";
const gray100 = useCssVar("--gray-100");
const gray900 = useCssVar("--gray-900");
const green500 = useCssVar("--green-500");
const green900 = useCssVar("--green-900");
const themes = {
  light: {
    gray100: "0 0% 95%",
    gray900: "0 0% 5%",
    green500: "126 98% 71%",
    green900: "126 98% 11%",
  },
  dark: {
    gray100: "0 0% 5%",
    gray900: "0 0% 95%",
    green500: "126 88% 71%",
    green900: "126 98% 11%",
  },
};
const changeTheme = (key) => {
  gray100.value = themes[key].gray100;
  gray900.value = themes[key].gray900;
  green500.value = themes[key].green500;
  green900.value = themes[key].green900;
};
</script>

<template>
  <div>
    <Button v-for="(_, key) in themes" @click="changeTheme(key)">
      {{ key }}
    </Button>
    <!-- 
    <div class="bg-fg/5 h-8" />
    <div class="bg-fg/10 h-8" />
    <div class="bg-fg/20 h-8" />
    <div class="bg-fg/25 h-8" />
    <div class="bg-fg/30 h-8" />
    <div class="bg-fg/40 h-8" />
    <div class="bg-fg/50 h-8" />
    <div class="bg-fg/60 h-8" />
    <div class="bg-fg/70 h-8" />
    <div class="bg-fg/75 h-8" />
    <div class="bg-fg/80 h-8" />
    <div class="bg-fg/90 h-8" />
    <div class="bg-fg/95 h-8" />
    <div class="bg-fg/100 h-8" /> -->
  </div>
</template>
