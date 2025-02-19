import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState } from "../utils/Types/StoresTypes";

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      role: null,
      setAuth: (user: string, accessToken: string, refreshToken: string) =>
        set((state) => ({
          ...state,
          user,
          accessToken,
          refreshToken,
        })),

      setAcessToken: (accessToken: string) =>
        set((state) => ({
          ...state,
          accessToken,
        })),
      setRole: (role: string) =>
        set((state) => ({
          ...state,
          role,
        })),

      logout: () =>
        set(() => ({
          user: null,
          accessToken: null,
          refreshToken: null,
          role: null,
        })),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
