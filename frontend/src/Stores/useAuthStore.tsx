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
      email:null,
      mobile:null,
      setAuth: (user: string, accessToken: string, refreshToken: string,role:string,email:string,mobile:string) =>
        set((state) => ({
          ...state,
          role,
          user,
          accessToken,
          refreshToken,
          email,
          mobile
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
