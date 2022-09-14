// @TODO: Move to config
const ingestUrl = "rtmp://streaming.elektron.art/raw";
const ingestTranscodeUrl = "rtmp://live-eu1.icareus.com:1935/suitelive";

const streamTranscodeKey = "elektron";

const streamUrl = "https://streaming.elektron.art/hls/${streamkey}.m3u8";
const streamTranscodeUrl =
  "https://icareus-eu4-live.secure2.footprint.net/suitelive/ngrp:123636901/playlist.m3u8";

export const getVideostreams = (keys) => {
  if (!keys) return [];
  const streamkeys = split(keys);
  return streamkeys.map((streamkey: string) => {
    const url =
      streamkey === streamTranscodeKey ? streamTranscodeUrl : streamUrl;
    return {
      ingestUrl,
      ingestTranscodeUrl,
      streamkey,
      url: replaceTokens(url as string, { streamkey }),
    };
  });
};
