import { format, sub } from "date-fns";

export const formatVideoDatetime = (str) =>
  format(new Date(str), "dd.LL.yyyy HH:mm:ss z");

const getKey = (key: string) => {
  if (key === "x_live_1") {
    return "elektron";
  }
  return key.split("_")[0];
};

export const processVideo2 = (video: any) => {
  return video;
};
export const processVideo = (video: any) => {
  const id = video.id;
  const path = video.value.path;
  const name = video.value.files[0].name;
  const key = getKey(video.value.original);
  const videoUrl = `https://pepe-dl.babahhcdn.com/bb1150/${path}/${name}`;
  const lastModified = name.split(".")[0].split("_").slice(-1)[0];

  const endDatetime = new Date(parseInt(lastModified) * 1000);
  const startDatetime = sub(endDatetime, { seconds: video.value.duration });
  const uploadDatetime = new Date(video.datetime);
  const duration = video.value.duration;

  return {
    id,
    name,
    videoUrl,
    lastModified,
    startDatetime,
    endDatetime,
    uploadDatetime,
    key,
    duration,
  };
};
