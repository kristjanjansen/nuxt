<template>
  <button
    class="dock-button flex h-7 w-[10vw] items-center truncate border border-gray-700 bg-black px-2 font-mono text-sm uppercase text-gray-400 transition hover:text-gray-300 lg:w-[15vw]"
  >
    <slot />
  </button>
</template>

<style>
.dock-button * {
  @apply truncate;
}
</style>
