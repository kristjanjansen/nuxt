<template>
  <transition
    appear
    enter-active-class="duration-1000 transition ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-1000 transition ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div>
      <slot />
    </div>
  </transition>
</template>
