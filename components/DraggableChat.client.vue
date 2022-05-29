<script setup lang="ts">
import { computed, Ref, ref, watchEffect } from "vue";
import {
  debouncedWatch,
  useDraggable,
  useMagicKeys,
  useWindowSize,
} from "@vueuse/core";
import { useStorage } from "@vueuse/core";

const config = useRuntimeConfig();
const { ws, sendMessage } = useMessages(config.public.wsUrl);

type DraggableChatUser = {
  userId: string;
  userName: string;
  x: number;
  y: number;
  chat: string;
};

const UPDATE_RATE = 600; // TODO: Make it a function of user count
const ANIMATION_RATE = 300;
// https://cubic-bezier.com/#.48,.76,.78,.95
const ANIMATION_EASING = "cubic-bezier(.48,.76,.78,.95)";

function useDraggableChat(
  channel: string,
  userId: Ref<string>,
  userName: Ref<string>
) {
  const users = ref<DraggableChatUser[]>([]);

  ws.value.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    if (message.channel === channel && message.type === "DRAGGABLECHAT") {
      const user = {
        userId: message.userId,
        userName: message.userName,
        x: message.value.x,
        y: message.value.y,
        chat: message.value.chat,
      };
      const existingUserIndex = users.value?.findIndex((u) => {
        return u.userId === user.userId;
      });
      if (users.value && existingUserIndex > -1) {
        users.value[existingUserIndex] = user;
      } else {
        users.value = [...users.value, user];
      }
    }
  });

  const userRef = ref<HTMLElement>();

  const {
    x,
    y,
    style: userStyle,
  } = useDraggable(userRef, {
    // TODO: Initialize with random values
    initialValue: { x: 100, y: 100 },
  });

  const { width, height } = useWindowSize();
  const center = computed(() => {
    return { x: width.value / 2, y: height.value / 2 };
  });

  const chat = ref("");

  debouncedWatch(
    [x, y, chat],
    () => {
      const message = {
        channel,
        type: "DRAGGABLECHAT",
        userId: userId.value,
        userName: userName.value,
        value: {
          x: x.value - center.value.x,
          y: y.value - center.value.y,
          chat: chat.value,
        },
      };
      sendMessage(message);
      // TODO: Store user locaction locally?
    },
    {
      immediate: true,
      debounce: UPDATE_RATE,
    }
  );

  const otherUsers = computed(() =>
    users.value.filter((u) => u.userId !== userId.value)
  );

  const otherUserStyle = (user: DraggableChatUser) => {
    const x = user.x + center.value.x;
    const y = user.y + center.value.y;
    return {
      top: `${y}px`,
      left: `${x}px`,
      transition: `all ${ANIMATION_RATE}ms ${ANIMATION_EASING}`,
    };
  };
  // TODO: Remove _users when done debugging
  return {
    center,
    userRef,
    userStyle,
    otherUsers,
    otherUserStyle,
    chat,
    _users: users,
  };
}

// ---

const userId = useStorage("elektron_user_id", "aaa");
const userName = useStorage("elektron_user_name", "bbb");

const { userRef, userStyle, otherUsers, otherUserStyle, chat } =
  useDraggableChat("draggablechat", userId, userName);

const enabled = ref(true);
const { shift, c } = useMagicKeys();
watchEffect(() => {
  if (shift.value && c.value) {
    enabled.value = !enabled.value;
  }
});
</script>

<template>
  <div>
    <div v-if="enabled" class="fixed inset-0 bg-gray-100/50" />
    <div
      v-for="user in otherUsers"
      :style="otherUserStyle(user)"
      style="position: fixed; display: flex; gap: var(--gap-2); width: 200px"
    >
      <div
        :style="{ opacity: enabled ? 1 : 0.5 }"
        style="
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 10000px;
          flex-shrink: 0;
          opacity: 0.5;
        "
      />
      <div style="pointer-events: none; user-select: none">
        <div style="font-size: var(--text-xs); opacity: 0.3">
          {{ user.userName }}
        </div>
        <div style="opacity: 0.6">{{ user.chat }}</div>
      </div>
    </div>
    <div
      ref="userRef"
      :style="userStyle"
      style="position: fixed; display: flex; gap: var(--gap-2); width: 200px"
    >
      <div
        :style="{ opacity: enabled ? 1 : 0.5 }"
        style="
          width: 20px;
          height: 20px;
          background: rgba(255, 0, 0, 0.7);
          border-radius: 10000px;
          flex-shrink: 0;
        "
      />
      <div v-if="enabled">
        <div>
          {{ userName }}
        </div>
        <div>{{ chat }}</div>
      </div>
    </div>
  </div>
</template>
