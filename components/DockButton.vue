<template>
  <button
    class="dock-button flex h-7 w-[15vw] items-center truncate border border-gray-700 bg-black px-3 font-mono text-sm uppercase text-gray-400 transition hover:text-gray-300 lg:w-[20vw]"
  >
    <slot />
  </button>
</template>

<style>
.dock-button * {
  @apply truncate;
}
</style>
