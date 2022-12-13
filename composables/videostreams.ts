// @TODO: Move to config
const ingestRawUrl = "rtmp://streaming.elektron.art/raw";
const ingestTranscodeUrl = "rtmp://live-eu1.icareus.com:1935/suitelive";

const streamTranscodeKeyIn = "elektron";
const streamTranscodeKeyOut = "205827819";

const streamRawUrl = "https://streaming.elektron.art/hls/${streamkey}.m3u8";
const streamTranscodeUrl =
  "https://icareus-eu18-live.secure2.footprint.net/suitelive/ngrp:123636901/playlist.m3u8";

export const getVideostreams = (keys) => {
  if (!keys) return null;
  const streamkeys = split(keys);
  return streamkeys.map((key: string) => {
    const ingest =
      key === streamTranscodeKeyIn ? ingestTranscodeUrl : ingestRawUrl;
    const streamkey =
      key === streamTranscodeKeyIn ? streamTranscodeKeyOut : key;
    const url =
      key === streamTranscodeKeyIn ? streamTranscodeUrl : streamRawUrl;

    return {
      ingest,
      streamkey,
      url: replaceTokens(url as string, { streamkey }),
    };
  });
};
