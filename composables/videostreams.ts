// We keep this code separare from videostream.ts
// since these function are provider-specific and can change

// @TODO: Move to config
const streamUrl = "https://streaming.elektron.art/hls/${streamkey}.m3u8";
const inputRawUrl = "rtmp://streaming.elektron.art/raw";
const inputTranscodeUrl = "rtmp://streaming.elektron.art/transcode";

const formatVideostreamUrl = (streamkey: string) => {
  return replaceTokens(streamUrl as string, { streamkey });
};

export const getVideostreams = (keys) => {
  if (!keys) return [];
  const streamkeys = split(keys);
  return streamkeys.map((streamkey: string) => {
    return {
      streamkey,
      url: formatVideostreamUrl(streamkey),
      inputRawUrl,
      inputTranscodeUrl,
    };
  });
};
