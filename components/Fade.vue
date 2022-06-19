<template>
  <transition
    enter-active-class="duration-300 transition-all ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-300 transition-all ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <slot />
  </transition>
</template>
