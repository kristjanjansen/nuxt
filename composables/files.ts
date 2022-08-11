export const useFiles = () => {
  const baseURL = useStrapiUrl();
  console.log(baseURL);
  const getFiles = (dir) =>
    useFetch<any[]>(`/files/${dir}`, {
      baseURL,
      server: false,
    });
  const uploadFile = (dir, filename, src) =>
    useFetch(`/files/${dir}/upload`, {
      baseURL,
      method: "PUT",
      body: { filename, src },
    });
  return { getFiles, uploadFile };
};
