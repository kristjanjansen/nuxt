import { sub, parse, add } from "date-fns";

export const processFile = (file: any, path) => {
  file.pathRoute = `/lab/files/${path}`;
  file.fileRoute = `/lab/files/${path}/${file.filename}`;
  file.start_at = file.modified_at; // TODO: Add custom sorting function to remove this
  file.modified_at_formatted = formatDatetime(new Date(file.modified_at));

  let f = file.filename.replace(/\.mp4$/, "").split("___");
  if (f.length === 3) {
    file.streamkey = f[0];
    file.start_at_raw = f[1];
    file.start_at = parse(f[1] + "__Z", "yy_MM_dd__HH_mm_ss__X", new Date());
    file.startDatetime = file.start_at;
    file.start_at_formatted = formatDatetime(new Date(file.start_at));
    file.duration = parseFloat(f[2]);
    file.end_at = add(file.start_at, { seconds: file.duration });
    file.end_at_formatted = formatDatetime(file.end_at);
    file.endDatetime = file.end_at;
    file.duration_formatted = new Date(file.duration * 1000)
      .toISOString()
      .split("T")[1]
      .replace("Z", "");
  }
  f = file.filename.split("-");
  if (file.filename.endsWith(".jpg") && f.length === 7) {
    file.start_at = file.filename.split(".")[0] + "__Z";

    file.start_at = parse(
      file.filename.split(".")[0] + "__Z",
      "dd-MM-yyyy-HH-mm-ss-SSS__X",
      new Date()
    );
  }
  return file;
};

export const useFiles = () => {
  const baseURL = useStrapiUrl();
  const getFiles = (path) =>
    useFetch<any[]>(`/files/${path}`, {
      baseURL,
      server: false,
      key: `/files/${path}`,
      transform: (data) =>
        data.map((d) => processFile(d, path)).sort(sortEvents),
    });
  const uploadFile = (dir, filename, src) =>
    useFetch(`/files/${dir}/upload`, {
      baseURL,
      method: "PUT",
      body: { filename, src },
    });
  return { getFiles, uploadFile };
};
