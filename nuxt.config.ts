import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/strapi",
    "@nuxtjs/tailwindcss",
    ["unplugin-icons/nuxt", { autoInstall: true }],
    "@vueuse/nuxt",
  ],
  runtimeConfig: {
    strapiUrl: "",
    public: { wsUrl: "", fientaUrl: "", fientaToken: "" },
  },
  experimental: { reactivityTransform: true },
});
