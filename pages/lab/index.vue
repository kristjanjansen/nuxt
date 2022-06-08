<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/" />
    <Title>Lab</Title>
    <p>
      Various coding experiments,
      <span class="font-mono">ENG</span> only
    </p>
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
