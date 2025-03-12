import { api_public } from "../utils/api";
import { ProductType } from "../utils/Types/CommonTypes";

async function SearchProducts(searchQuery:string,category:string,minPrice:string,maxPrice:string,minRating:string): Promise<ProductType[]> {
  try {
    console.log("inside search products")
    const response = await api_public.get<{ products: ProductType[] }>(
      `product/get-all-products?searchquery=${searchQuery}&category=${category}&minp=${minPrice}&maxp=${maxPrice}&minrat=${minRating}`
    );
    console.log("products")
    console.log(response.data.products);
    const products: ProductType[] = response.data.products;

    const filteredProducts = products.filter((product) =>
      [
        product.title,
        product.description,
        product.category,
      
      ].some((field) => field.toLowerCase().includes(searchQuery.toLowerCase()))
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
