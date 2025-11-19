import { create } from "zustand";

export const useChatStore = create((set) => ({
  messages: [],
  addMessage: (type, text) =>
    set((state) => ({
      messages: [...state.messages, { type, text }],
    })),
}));
