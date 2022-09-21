<template>
  <button
    class="dock-button flex h-7 items-center truncate border border-grey-700 bg-black px-2 font-mono text-xs uppercase tracking-wide text-white transition hover:text-grey-300 lg:w-[15vw]"
  >
    <slot />
  </button>
</template>

<style>
.dock-button * {
  @apply truncate;
}
</style>
