import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/strapi",
    "@nuxtjs/tailwindcss",
    ["unplugin-icons/nuxt", { autoInstall: true }],
  ],
  runtimeConfig: {
    strapiUrl: "",
    public: { wsUrl: "" },
  },
  experimental: { reactivityTransform: true },
});
