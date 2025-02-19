import { api_public } from "../utils/api";
import { ProductType } from "../utils/Types/CommonTypes";

async function SearchProducts(query: string): Promise<ProductType[]> {
  try {
    const response = await api_public.get<{ products: ProductType[] }>(
      "/products"
    );
    const products: ProductType[] = response.data.products;

    const filteredProducts = products.filter((product) =>
      [
        product.title,
        product.description,
        product.category,
        ...product.tags,
      ].some((field) => field.toLowerCase().includes(query.toLowerCase()))
    );

    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
async function ProductsByCat(query: string): Promise<ProductType[]> {
  console.log("products");
  try {
    const response = await api_public.get<{ products: ProductType[] }>(
      "/products"
    );
    const products: ProductType[] = response.data.products;

    const filteredProducts = products.filter((product) => {
      return product.category === query;
    });

    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
export { ProductsByCat };
export { SearchProducts };
