<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/" />
    <Title>Lab</Title>
    <p>
      Various coding experiments,
      <span class="font-mono">ENG</span> only
    </p>
    <div class="grid w-full auto-rows-fr gap-5 md:grid-cols-3">
      <LinkCard to="/lab/messages" class="aspect-video pr-8">
        <Title small>Messages</Title>
        <p class="text-gray-500">Send and receive websocket messages</p>
      </LinkCard>
      <LinkCard to="/lab/chat" class="aspect-video pr-8">
        <Title small>Chat</Title>
        <p class="text-gray-500">Chat over websocket</p>
      </LinkCard>
      <LinkCard to="/lab/videocapture" class="border-re aspect-video pr-8">
        <Title small>Videocapture</Title>
        <p class="text-gray-500">Capture a frame from live video</p>
      </LinkCard>
      <LinkCard to="/lab/videos" class="border-re aspect-video pr-8">
        <Title small>Video analysis</Title>
        <p class="text-gray-500">An R & D project</p>
      </LinkCard>
    </div>
  </Stack>
</template>
