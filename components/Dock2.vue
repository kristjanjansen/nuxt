<script setup lang="ts">
import IconMuted from "~icons/radix-icons/speaker-loud";
</script>
<template>
  <div class="fixed bottom-0 left-0 right-0">
    <div class="flex">
      <div
        class="flex h-8 w-8 shrink-0 items-center justify-center border border-gray-700 text-gray-300"
      >
        <IconMuted class="scale-75" />
      </div>
      <DockButton class="border-l-0"
        ><div class="truncate">Hello</div></DockButton
      >
      <DockButton class="!w-full border-l-0 px-1">
        <LiveBadge class="-translate-x-1 scale-75">Soon</LiveBadge>
        <div class="truncate">
          Somebody just got murdered in 2 hours
        </div></DockButton
      >
      <UserDock class="!border-l-0" />
    </div>
  </div>
</template>
