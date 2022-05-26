<script setup lang="ts">
const { find } = useStrapi3(); //

// // data, pending, refresh, error
const { data: events } = await useAsyncData("events", () =>
  find<any>("events", { _limit: -1 }).then((events) =>
    events.reverse().slice(0, 3)
  )
);

// const a = await useAsyncData("hello", () => $fetch("/api/hello"));
</script>
<template>
  <Stack class="p-8">
    <Title>Hello world</Title>
    <div class="flex gap-2">
      <Button>Hellog</Button>
      <Button primary>Hellog</Button>
    </div>
    <Content>
      Transdistsiplinaarne etenduskunsti platvorm, mis liidab kaasaegse kunsti,
      teaduse ja tehnoloogia otsingulisi tegevusi. Lidab kaasaegse kunsti,
      teaduse ja tehnoloogia otsingulisi tegevusi
    </Content>
    <Stack>
      <Card v-for="event in events">
        <Stack>
          <Title class="text-lg">{{ event.title }}</Title>
          <Markdown :markdown="event.description_estonian" />
        </Stack>
      </Card>
    </Stack>
  </Stack>
</template>
