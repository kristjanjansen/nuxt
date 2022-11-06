<script setup lang="ts">
const { lang } = useLang();
const intro = [
  `Welcome to the today++. Here is the place where eˉlektron experiments with the future technologies.`,
  `See kes ei ela tulevikus, ei mäleta minevikku. Siin on elektroni labaratoorium kus katsetatakse uusi tehnoloogiad.`,
];
const wallpaper =
  "https://elektron.fra1.cdn.digitaloceanspaces.com/assets/audience_camerafeed_blending_for_collective_expression.jpeg";
</script>

<template>
  <div>
    <img
      :src="wallpaper"
      class="fixed inset-0 h-full w-full object-cover opacity-50 blur-sm"
    />
    <img
      :src="wallpaper"
      class="fixed inset-0 h-full w-full scale-x-[2] -scale-y-[2] object-cover opacity-50 bg-blend-screen saturate-200 backdrop-contrast-200"
    />
    <Breadboard class="bg-black/70" />
    <Stack class="absolute top-4 left-4 right-4 gap-4 md:top-6 md:left-6">
      <Title class="w-auto text-gray-400 md:w-[40vw]">{{ intro[lang] }}</Title>
      <Button to="/lab" right>
        {{ ["See the experiments", "Vaata eksperimente"][lang] }}
      </Button>
    </Stack>
  </div>
</template>
