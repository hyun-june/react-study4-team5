import { create } from "zustand";

export const useToastStore = create((set) => ({
  toast: null,
  setToast: (toast) => set({ toast }),
}));
