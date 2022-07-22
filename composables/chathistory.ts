export const useChatHistory = (channel) =>
  useMessagesHistory({
    filters: { type: { $eq: "CHAT" }, channel: { $eq: channel } },
  });
