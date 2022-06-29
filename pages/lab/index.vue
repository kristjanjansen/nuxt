<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/" />
    <Title>Experiments</Title>
    <div class="grid w-full auto-rows-fr gap-5 md:grid-cols-4">
      <LinkCard
        to="/lab/experiments/june_2022"
        class="border-re aspect-video pr-8"
      >
        <Title small>Experiment in June 2022</Title>
        <p class="text-gray-500">
          Sensors and sliders and skating on propaganda
        </p>
      </LinkCard>
      <LinkCard to="/lab/experiments" class="border-re aspect-video pr-8">
        <Title small>Video analysis</Title>
        <p class="text-gray-500">Analyze and augment video data</p>
      </LinkCard>
    </div>
    <Title>Other lab projects</Title>
    <div class="grid w-full auto-rows-fr gap-5 md:grid-cols-4">
      <LinkCard to="/lab/videocapture" class="border-re aspect-video pr-8">
        <Title small>Video capture</Title>
        <p class="text-gray-500">Capture a frame from live video</p>
      </LinkCard>
      <LinkCard to="/lab/messages" class="aspect-video pr-8">
        <Title small>Messages</Title>
        <p class="text-gray-500">Send and receive websocket messages</p>
      </LinkCard>
      <LinkCard to="/lab/chat" class="aspect-video pr-8">
        <Title small>Chat</Title>
        <p class="text-gray-500">Chat over websocket</p>
      </LinkCard>
      <LinkCard to="/lab/social" class="aspect-video pr-8">
        <Title small>Social cards</Title>
        <p class="text-gray-500">Going social using generative art</p>
      </LinkCard>
      <LinkCard to="/lab/parsedetails" class="aspect-video pr-8">
        <Title small>Details</Title>
        <p class="text-gray-500">Parsing project and event details</p>
      </LinkCard>
      <LinkCard to="/lab/draggables" class="aspect-video pr-8">
        <Title small>Draggables</Title>
        <p class="text-gray-500">Drag galore</p>
      </LinkCard>
      <LinkCard
        to="/projects/ruumiantropoloogiad/kussaoled/live"
        class="border-re aspect-video bg-green-400 pr-8 hover:bg-green-500"
      >
        <Title small class="!text-black">Where are you</Title>
        <p class="text-black">Video capture as an installation</p>
      </LinkCard>
    </div>
  </Stack>
</template>
