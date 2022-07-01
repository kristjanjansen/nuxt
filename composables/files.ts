export const useFiles = () => {
  const baseURL = useStrapiUrl();
  const getFiles = () =>
    useFetch<any[]>("/files", {
      baseURL,
    });
  const uploadFile = (filename, src) =>
    useFetch("/files/upload", {
      baseURL,
      method: "PUT",
      body: { filename, src },
    });
  return { getFiles, uploadFile };
};
