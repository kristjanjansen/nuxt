export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  appendHeader(
    event,
    "Content-Disposition",
    "attachment; filename=" + query.filename
  );
  //const response = await $fetch.raw(query.path as string)
  return sendRedirect(event, query.path as string);
});
