// @TODO Use config

import { fi } from "date-fns/locale";

const url = "https://ws.elektron.art/messages?secret=eestiteatriauhinnad";

export const useChatHistory = (channel) =>
  useFetch<any[]>(url, {
    key: url,
    default: () => [],
    transform: (messages: any) => {
      return messages.filter((m) => {
        const filtered = m.type === "CHAT" && m.channel === channel;
        return filtered;
      });
    },
  });
