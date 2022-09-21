<script setup lang="ts">
import { useIdle, useWindowSize, useCssVar } from "@vueuse/core";

const { idle } = useIdle(3000); // 3 seconds idle
const { height } = useWindowSize();
const appHeight = useCssVar("--app-height");
watch(height, (newHeight) => (appHeight.value = `${newHeight}px`), {
  immediate: true,
});

// TODO: Bring back draggableChat
//watchEffect(() => draggableChatState.value);
</script>

<template>
  <main :class="{ idle: idle }">
    <Body class="body" />
    <ENav />
    <slot />
    <EWindowBorder />
  </main>
</template>

<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
.body {
  font-family: sans, sans-serif;
  margin: 0;
  background: black;
  color: white;
}
.body h1,
.body h2,
.body h3,
.body h4,
.body h5,
.body h6 {
  font-family: title, sans-serif;
}
.body pre,
.body code {
  font-family: mono;
}

.body::selection {
  color: var(--accent);
  text-shadow: 2px 1px 5px var(--accent);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
