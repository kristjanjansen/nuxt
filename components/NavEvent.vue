<template>
  <RouterLink
    to="/"
    class="flex h-10 items-center justify-between gap-2 border-r border-b border-l border-gray-700 bg-black/90 px-3 text-sm transition hover:bg-gray-900"
  >
    <div class="flex gap-1">
      <LiveBadge />
      <div class="tracking-wide">
        eˉlektron presents: Zahir's LP Seems Normal release party
      </div>
      <div class="tracking-wide text-gray-500">by Zahir. Started 2min ago</div>
    </div>
    <Link right class="text-green-400">Go to event</Link>
  </RouterLink>
</template>
