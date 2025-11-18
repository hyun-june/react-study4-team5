import { create } from "zustand";

export const useLoginStore = create((set) => ({
  id: "",
  password: "",
  isLogin: false,
  login: (id, password) => set({ id, password, isLogin: true }),
  logout: () => set({ id: "", password: "", isLogin: false }),
}));
