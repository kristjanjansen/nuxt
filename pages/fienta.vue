<script setup lang="ts">
import { parseMarkdown } from "~~/composables/strapi";
const router = useRouter();
const route = useRoute();
const code = ref<string>((route.query.code as string) || "");
const { lang } = useLang();

const onValidate = async () => {
  if (code.value) {
    const event = await validateTicket(code.value);
    if (event?.eventLiveLink) {
      router.push(event.eventLiveLink);
    }
    //@TODO: Handle invalid ticket code
  }
};
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
    <Textarea v-model="code" placeholder="Code" class="w-[12ch]" />
    <Button primary @click="onValidate">
      {{ ["Submit ticket code", "Kontrolli pileti koodi"][lang] }}
    </Button>
  </Stack>
</template>
