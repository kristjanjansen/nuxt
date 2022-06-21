<script setup lang="ts">
import { parseMarkdown } from "~~/composables/strapi";
const route = useRoute();
const code = ref<string>((route.query.code as string) || "");
const { lang } = useLang();
</script>

<template>
  <Stack
    class="grid h-full place-content-center place-items-center p-8 text-center"
  >
    <Title>{{ ["Validate your ticket", "Piletikontroll"][lang] }}</Title>
    <Content
      class="max-w-[40ch]"
      :content="
        parseMarkdown(
          [
            `There is a **ticket code** in your Fienta email, just below big blue button. Copy-paste the code into the box below:`,
            `Fienta piletil on piletikood emaili lõpus, sinise sisenemisnupu all. Kopeeri see kood siia:`,
          ][lang]
        )
      "
    />
    <Textarea v-model="code" placeholder="Code" class="w-[10ch]"></Textarea>
    <Button primary>{{
      ["Submit ticket code", "Kontrolli pileti koodi"][lang]
    }}</Button>
  </Stack>
</template>
