<script setup lang="ts">
import { parseMarkdown } from "~~/composables/strapi";
const route = useRoute();
const code = ref<string>((route.query.code as string) || "");
const { lang } = useLang();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Title>{{ ["Validate your ticket", "Piletikontroll"][lang] }}</Title>
    <Content
      v-if="lang === 0"
      :content="
        parseMarkdown(
          `There is a **ticket code** in your Fienta email, just below the Sisene üritusele / Enter event blue button. Copy-paste the code to the box below:`
        )
      "
    />
    <Content
      v-if="lang === 1"
      :content="
        parseMarkdown(
          `Fienta piletil on piletikood emaili lõpus, sinise sisenemisnupu all. Kopeeri see kood siia:`
        )
      "
    />
    <Textarea v-model="code" placeholder="Code" class="w-[10ch]"></Textarea>
    <Button primary>Submit ticket code</Button>
  </Stack>
</template>
