// We keep this code separare from videostreamt.ts
// since these function are provider-specific and can change

// @TODO: Rely on autoimport
import { split } from "./string";

// @TODO: Move to config
const config = {
  streamUrl:
    "https://elektron-live.babahhcdn.com/bb1150-le/${streamkey}/index.m3u8",
  streamTranscodeUrl:
    "https://elektron-live.babahhcdn.com/bb1150-le/${streamkey}.smil/playlist.m3u8",
  streamTranscodeKeyIn: "elektron",
  streamTranscodeKeyOut: "x_live_1_c1",
};

const formatVideostreamKey = (streamkey: string) => {
  return streamkey === config.streamTranscodeKeyIn
    ? config.streamTranscodeKeyOut
    : streamkey;
};

const formatVideostreamUrl = (streamkey: string) => {
  if (streamkey.endsWith("m3u8")) {
    return streamkey;
  } else if (streamkey === config.streamTranscodeKeyOut) {
    return replaceTokens(config.streamTranscodeUrl, {
      streamkey: config.streamTranscodeKeyOut,
    });
  } else {
    return replaceTokens(config.streamUrl as string, { streamkey });
  }
};

export const getVideostreams = (keys = "") => {
  const streamkeys = split(keys);
  return streamkeys.map(formatVideostreamKey).map((streamkey: string) => {
    return {
      streamkey,
      streamurl: formatVideostreamUrl(streamkey),
    };
  });
};
