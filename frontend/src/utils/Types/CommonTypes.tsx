export interface ProductType {

    average_rating: string;  
    category: string;
    description: string;
    discount: string;       
    price: string;           
    product_id: number;
    stock: number;
    title: string;
    image:string;
    reviews?:[]
  }
  

type CartItem = {
  title: string;
  id: number;
  price: string;
  image: string;
};
export type { CartItem };

export interface Category {
  name: string;
  icon: React.ReactNode;
}
export interface ProductImageType {
  image: string | undefined;
  title: string | undefined;
}
export type ProductReviewType = { product: ProductType | undefined };
