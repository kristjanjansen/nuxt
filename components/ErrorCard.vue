<script setup lang="ts">
import IconGlobe from "~icons/radix-icons/globe";
</script>
<template>
  <div
    class="grid h-full place-content-center place-items-center p-8 text-center"
  >
    <div class="flex"><IconGlobe /><IconGlobe class="-translate-y-1" /></div>
    <br />
    <div class="max-w-[40ch]">
      The planets are not aligned to display this page. You are either offline,
      our servers are down, or there is a galaxy superhighway built over all of
      us.
    </div>
  </div>
</template>
