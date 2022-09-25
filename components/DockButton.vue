<template>
  <button
    class="dock-button flex h-7 items-center truncate border border-gray-700 bg-black px-2 font-mono text-xs uppercase tracking-wide text-white transition hover:text-gray-300 lg:min-w-[10vw]"
  >
    <slot />
  </button>
</template>

<style>
.dock-button * {
  @apply truncate;
}
</style>
