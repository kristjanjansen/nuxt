<script setup lang="ts">
const message = ref("Waiting for a click...");
const onClick = () => (message.value = "Clicked at " + performance.now());
</script>

<template>
  <div>
    <Stack class="p-4 md:p-6">
      <Title>Buttons and links</Title>

      <Title medium>Default buttons</Title>

      <Button @click="onClick">Regular</Button>
      <Button left @click="onClick">Regular left</Button>
      <Button right @click="onClick">Regular right</Button>
      <Button up @click="onClick">Regular up</Button>
      <Button down @click="onClick">Regular down</Button>

      <Title medium>Default router links</Title>

      <Button to="/lab/buttons/back">Regular</Button>
      <Button to="/lab/buttons/back" left>Regular left</Button>
      <Button to="/lab/buttons/back" right>Regular right</Button>
      <Button to="/lab/buttons/back" up>Regular up</Button>
      <Button to="/lab/buttons/back" down>Regular down</Button>

      <Title medium>Default external links</Title>

      <Button href="https://google.com">Regular</Button>
      <Button href="https://google.com" left>Regular left</Button>
      <Button href="https://google.com" right>Regular right</Button>
      <Button href="https://google.com" up>Regular up</Button>
      <Button href="https://google.com" down>Regular down</Button>

      <Title medium>Primary buttons</Title>

      <Button primary @click="onClick">Primary</Button>
      <Button primary left @click="onClick">Primary left</Button>
      <Button primary right @click="onClick">Primary right</Button>
      <Button primary up @click="onClick">Primary up</Button>
      <Button primary down @click="onClick">Primary down</Button>

      <Title medium>Primary router links</Title>

      <Button primary to="/lab/buttons/back">Primary</Button>
      <Button primary left to="/lab/buttons/back">Primary left</Button>
      <Button primary right to="/lab/buttons/back">Primary right</Button>
      <Button primary up to="/lab/buttons/back">Primary up</Button>
      <Button primary down to="/lab/buttons/back">Primary down</Button>

      <Title medium>Primary external links</Title>

      <Button primary href="https://google.com">Primary</Button>
      <Button primary left href="https://google.com">Primary left</Button>
      <Button primary right href="https://google.com">Primary right</Button>
      <Button primary up href="https://google.com">Primary up</Button>
      <Button primary down href="https://google.com">Primary down</Button>

      <Title medium>Small buttons</Title>

      <Button small @click="onClick">Small regular</Button>
      <Button small left @click="onClick">Small left</Button>
      <Button small right @click="onClick">Small right</Button>
      <Button small up @click="onClick">Small up</Button>
      <Button small down @click="onClick">Small down</Button>

      <Title medium>Small router links</Title>

      <Button small to="/lab/buttons/back">Small regular</Button>
      <Button small to="/lab/buttons/back" left>Small left</Button>
      <Button small to="/lab/buttons/back" right>Small right</Button>
      <Button small to="/lab/buttons/back" up>Small up</Button>
      <Button small to="/lab/buttons/back" down>Small down</Button>

      <Title medium>Small external links</Title>

      <Button small href="https://google.com">Small regular</Button>
      <Button small href="https://google.com" left>Small left</Button>
      <Button small href="https://google.com" right>Small right</Button>
      <Button small href="https://google.com" up>Small up</Button>
      <Button small href="https://google.com" down>Small down</Button>
    </Stack>
    <div class="fixed top-12 right-4 rounded bg-black p-2 font-mono text-sm">
      {{ message }}
    </div>
  </div>
</template>
