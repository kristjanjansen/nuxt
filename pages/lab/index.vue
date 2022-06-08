<template>
  <Stack class="p-3 md:p-5">
    <Title>Lab</Title>
    <p>Various coding experiments</p>
    <div class="grid auto-rows-fr gap-5 md:grid-cols-4">
      <LinkCard to="/lab/usemessages" class="aspect-video pr-8">
        <Title small>useMessages</Title>
        <p class="text-gray-500">Send and receive websocket messages</p>
      </LinkCard>
      <LinkCard to="/lab/usevideocapture" class="border-re aspect-video pr-8">
        <Title small>useVideocapture</Title>
        <p class="text-gray-500">Capture a frame from live video</p>
      </LinkCard>
    </div>
  </Stack>
</template>
