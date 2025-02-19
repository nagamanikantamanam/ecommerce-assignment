import { CartItem } from "./CommonTypes";
export interface FilterState {
  priceRange: [number, number];
  rating: number;
  discount: number;
  setPriceRange: (newRange: [number, number]) => void;
  setRating: (newRating: number) => void;
  setDiscount: (newDiscount: number) => void;
}
export interface MenuStore {
  anchorEl: HTMLElement | null;
  mobileMoreAnchorEl: HTMLElement | null;
  isMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  isCartMenuOpen: boolean;
  setCartAnchorEl: (anchorEl: HTMLElement | null) => void;
  handleCartMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleCartMenuClose: () => void;
  cartAnchorEl: HTMLElement | null;
  setAnchorEl: (anchorEl: HTMLElement | null) => void;
  setMobileMoreAnchorEl: (anchorEl: HTMLElement | null) => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMobileMenuClose: () => void;
  handleMenuClose: () => void;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}
export interface AuthState {
  user: string | null;

  accessToken: string | null;
  refreshToken: string | null;
  role: string | null;
  setAuth: (
    user: string,

    accessToken: string,
    refreshToken: string
  ) => void;
  setAcessToken: (accessToken: string) => void;
  setRole: (role: string) => void;
  logout: () => void;
}
export type CartState = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
};
