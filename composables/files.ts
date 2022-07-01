export const useFiles = () => {
  //const baseURL = useStrapiUrl();
  const baseURL = "http://127.0.0.1:8080/api";
  const getFiles = () =>
    useFetch("/files", {
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
