import { CartState } from "../utils/Types/StoresTypes";
import { create } from "zustand";

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addItem: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));

export default useCartStore;
