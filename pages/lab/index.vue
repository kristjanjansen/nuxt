<template>
  <div class="p-4 md:p-6">
    <Stack>
      <Button small left to="/" />
      <Title>Tools for editors</Title>
      <div class="grid w-full auto-rows-fr gap-5 md:grid-cols-4">
        <LinkCard to="/lab/videostreams" class="border-re aspect-video pr-8">
          <Title small>Videostreams</Title>
          <p class="tracking-wide text-gray-500">Testing video providers</p>
        </LinkCard>
        <LinkCard to="/lab/files" class="border-re aspect-video pr-8">
          <Title small>Files</Title>
          <p class="tracking-wide text-gray-500">
            Browse the past video recordings and other files
          </p>
        </LinkCard>
        <LinkCard to="/lab/parsedetails" class="aspect-video pr-8">
          <Title small>Details</Title>
          <p class="tracking-wide text-gray-500">
            Parsing project and event details
          </p>
        </LinkCard>
      </div>
      <p />
      <Title>Experiments</Title>
      <div class="grid w-full gap-5 md:grid-cols-4">
        <LinkCard to="/lab/experiments" class="border-re aspect-video pr-8">
          <Title small>Experiments</Title>
          <p class="tracking-wide text-gray-500">Show current experiments</p>
        </LinkCard>
        <LinkCard
          to="/lab/controlsdebugger"
          class="border-re aspect-video pr-8"
        >
          <Title small>Controls debugger</Title>
          <p class="tracking-wide text-gray-500">
            Controls data not working? Fix them here
          </p>
        </LinkCard>
        <LinkCard
          to="/lab/files/records/other___22_06_14__17_26_01___1809.88.mp4"
          class="border-re aspect-video pr-8"
        >
          <Title small>Testing audience feedback in June 2022</Title>
          <p class="tracking-wide text-gray-500">
            Measuring audience feedback with sliders
          </p>
        </LinkCard>
        <LinkCard
          to="/projects/ruumiantropoloogiad/kussaoled/live"
          class="border-re aspect-video pr-8"
        >
          <Title small>Where are you</Title>
          <p class="tracking-wide text-gray-500">
            Interactive hybrid installation in Baltoscandal 2022
          </p>
        </LinkCard>
      </div>
      <p />
      <Title>User interface prototyping</Title>
      <div class="grid w-full auto-rows-fr gap-5 md:grid-cols-4">
        <LinkCard to="/lab/ecomponents" class="border-re aspect-video pr-8">
          <Title small>EComponents</Title>
          <p class="text-gray-500">
            Bringing in components from previous version
          </p>
        </LinkCard>
        <LinkCard to="/lab/colors" class="border-re aspect-video pr-8">
          <Title small>Colors</Title>
          <p class="text-gray-500">A color chart</p>
        </LinkCard>
        <LinkCard to="/lab/components" class="border-re aspect-video pr-8">
          <Title small>Components</Title>
          <p class="text-gray-500">Form inputs, buttons etc</p>
        </LinkCard>
        <LinkCard to="/lab/capture" class="border-re aspect-video pr-8">
          <Title small>Capture video frames</Title>
          <p class="tracking-wide text-gray-500">
            Storing the frames from live video
          </p>
        </LinkCard>
        <LinkCard to="/lab/videoframe" class="border-re aspect-video pr-8">
          <Title small>Animate video frames</Title>
          <p class="tracking-wide text-gray-500">
            Capturing the frames from live video and animate them
          </p>
        </LinkCard>
        <LinkCard to="/lab/messages" class="aspect-video pr-8">
          <Title small>Messages</Title>
          <p class="tracking-wide text-gray-500">
            Send and receive websocket messages
          </p>
        </LinkCard>
        <LinkCard to="/lab/chat" class="aspect-video pr-8">
          <Title small>Chat</Title>
          <p class="tracking-wide text-gray-500">Chat over websocket</p>
        </LinkCard>
        <LinkCard to="/lab/social" class="aspect-video pr-8">
          <Title small>Social cards</Title>
          <p class="tracking-wide text-gray-500">
            Going social using generative art
          </p>
        </LinkCard>
        <LinkCard to="/lab/draggables" class="aspect-video pr-8">
          <Title small>Dragggable</Title>
          <p class="tracking-wide text-gray-500">Testing Draggable component</p>
        </LinkCard>
        <LinkCard to="/lab/videobackground" class="aspect-video pr-8">
          <Title small>Video background</Title>
          <p class="tracking-wide text-gray-500">Styling the video</p>
        </LinkCard>
        <LinkCard to="/lab/coords" class="aspect-video pr-8">
          <Title small>Text coordinates</Title>
          <p class="tracking-wide text-gray-500">
            Assign unique XY coordinates to text
          </p>
        </LinkCard>
        <LinkCard to="/lab/audio" class="aspect-video pr-8">
          <Title small>Audiostream</Title>
          <p class="tracking-wide text-gray-500">A custom audio player</p>
        </LinkCard>
        <LinkCard to="/lab/videostream" class="aspect-video pr-8">
          <Title small>Video player</Title>
          <p class="tracking-wide text-gray-500">Video player v2</p>
        </LinkCard>
      </div>
    </Stack>
  </div>
</template>
