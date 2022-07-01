<template>
  <transition-group
    move-class="duration-300 transition-all"
    enter-active-class="duration-300 transition-all ease-in"
    enter-from-class="opacity-0 -translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="duration-300 transition-all ease-out absolute"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <slot />
  </transition-group>
</template>
