import { ProductType } from "./CommonTypes";
export interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
  index: number;
}
export interface ProductDetailsProp {
  product: ProductType;
}
export type BuyButtonPropType = { id: number };
export type ProductCardProp = { product: ProductType; index: number };
export type ProductImageProp = {
  image: string;
  name: string;
};
