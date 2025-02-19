// store.ts
import { create } from "zustand";

import { MenuStore } from "../utils/Types/StoresTypes";

const useMenuStore = create<MenuStore>((set) => ({
  anchorEl: null,
  mobileMoreAnchorEl: null,
  isMenuOpen: false,
  isMobileMenuOpen: false,
  cartAnchorEl: null,
  isCartMenuOpen: false,
  setCartAnchorEl: (anchorEl) =>
    set({ cartAnchorEl: anchorEl, isCartMenuOpen: Boolean(anchorEl) }),
  handleCartMenuOpen: (event) => {
    set({ cartAnchorEl: event.currentTarget, isCartMenuOpen: true });
  },
  handleCartMenuClose: () => set({ cartAnchorEl: null, isCartMenuOpen: false }),

  setAnchorEl: (anchorEl) => set({ anchorEl, isMenuOpen: Boolean(anchorEl) }),
  setMobileMoreAnchorEl: (anchorEl) =>
    set({ mobileMoreAnchorEl: anchorEl, isMobileMenuOpen: Boolean(anchorEl) }),

  handleProfileMenuOpen: (event) =>
    set({ anchorEl: event.currentTarget, isMenuOpen: true }),
  handleMobileMenuClose: () =>
    set({ mobileMoreAnchorEl: null, isMobileMenuOpen: false }),
  handleMenuClose: () => {
    set({ anchorEl: null, isMenuOpen: false });
    set({ mobileMoreAnchorEl: null, isMobileMenuOpen: false });
  },
  handleMobileMenuOpen: (event) =>
    set({ mobileMoreAnchorEl: event.currentTarget, isMobileMenuOpen: true }),
}));
export default useMenuStore;
