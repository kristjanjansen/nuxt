import { createPlausible } from "@huntersofbook/plausible-vue";

const plausible = createPlausible({
  init: {
    domain: "elektron.art",
    trackLocalhost: true,
  },
  settings: {
    enableAutoOutboundTracking: true,
    enableAutoPageviews: true,
  },
});

console.log(plausible);

export default defineNuxtPlugin((nuxtApp) => ({
  app: {
    head: {},
  },
}));
