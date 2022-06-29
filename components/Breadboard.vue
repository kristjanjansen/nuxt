<template>
  <div class="breadboard h-full w-full opacity-50" />
</template>

<style>
.breadboard {
  --pin-size: 0.75px;
  background: repeating-linear-gradient(
      0.25turn,
      transparent var(--pin-size),
      rgb(var(--gray-800)) var(--pin-size),
      rgb(var(--gray-800)) calc(var(--breadboard-tile-size) - var(--pin-size)),
      transparent calc(var(--breadboard-tile-size) - var(--pin-size)),
      transparent calc(var(--breadboard-tile-size) + var(--pin-size))
    ),
    repeating-linear-gradient(
      transparent var(--pin-size),
      rgb(var(--gray-800)) var(--pin-size),
      rgb(var(--gray-800)) calc(var(--breadboard-tile-size) - var(--pin-size)),
      transparent calc(var(--breadboard-tile-size) - var(--pin-size)),
      transparent calc(var(--breadboard-tile-size) + var(--pin-size))
    ),
    repeating-linear-gradient(rgb(var(--gray-300)), rgb(var(--gray-300)));
}
</style>
