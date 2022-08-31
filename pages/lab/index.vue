<template>
  <div class="p-4 md:p-6">
    <Stack>
      <Link left to="/" />
      <Title>Tools for editors</Title>
      <div class="grid w-full auto-rows-fr gap-5 md:grid-cols-4">
        <LinkCard to="/lab/streaming" class="border-re aspect-video pr-8">
          <Title small>Streaming</Title>
          <p class="text-gray-500">New streaming server</p>
        </LinkCard>
        <LinkCard to="/lab/files" class="border-re aspect-video pr-8">
          <Title small>Files</Title>
          <p class="text-gray-500">
            Browse the past video recordings and other files
          </p>
        </LinkCard>
        <LinkCard to="/lab/parsedetails" class="aspect-video pr-8">
          <Title small>Details</Title>
          <p class="text-gray-500">Parsing project and event details</p>
        </LinkCard>
      </div>
      <p />
      <Title>Experiments</Title>
      <div class="grid w-full auto-rows-fr gap-5 md:grid-cols-4">
        <LinkCard to="/lab/experiment" class="border-re aspect-video pr-8">
          <Title small>Start new experiment</Title>
          <p class="text-gray-500">A virtual lab to work in</p>
        </LinkCard>
        <LinkCard
          to="/lab/files/records/other___22_06_14__17_26_01___1809.88.mp4"
          class="border-re aspect-video pr-8"
        >
          <Title small>Testing audience feedback</Title>
          <p class="text-gray-500">
            Measuring audience feedback with sliders in June 2022
          </p>
        </LinkCard>
        <LinkCard
          to="/projects/ruumiantropoloogiad/kussaoled/live"
          class="border-re aspect-video pr-8"
        >
          <Title small>Where are you</Title>
          <p class="text-gray-500">
            Interactive hybrid installation in Baltoscandal 2022
          </p>
        </LinkCard>

        <LinkCard to="/lab/capture" class="border-re aspect-video pr-8">
          <Title small>Capture video frames</Title>
          <p class="text-gray-500">Storing the frames from live video</p>
        </LinkCard>
      </div>
      <p />
      <Title>User interface prototyping</Title>
      <div class="grid w-full auto-rows-fr gap-5 md:grid-cols-4">
        <LinkCard to="/lab/videoframe" class="border-re aspect-video pr-8">
          <Title small>Animate video frames</Title>
          <p class="text-gray-500">
            Capturing the frames from live video and animate them
          </p>
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

        <LinkCard to="/lab/draggables" class="aspect-video pr-8">
          <Title small>Dragggable</Title>
          <p class="text-gray-500">Testing Draggable component</p>
        </LinkCard>
        <LinkCard to="/lab/videobackground" class="aspect-video pr-8">
          <Title small>Video background</Title>
          <p class="text-gray-500">Styling the video</p>
        </LinkCard>
      </div>
    </Stack>
  </div>
</template>
