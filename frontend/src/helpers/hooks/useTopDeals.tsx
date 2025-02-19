import { useEffect, useState } from "react";
import { ProductType } from "../../utils/Types/CommonTypes";
import { api_public } from "../../utils/api";

function useTopDeals() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function getD() {
      try {
        let response = await api_public.get<{ products: ProductType[] }>(
          "/products"
        );

        if (response.data && response.data.products) {
          const sortedProducts: ProductType[] = response.data.products
            .sort(
              (a: ProductType, b: ProductType) =>
                b.discountPercentage - a.discountPercentage
            )
            .slice(0, 10);

          setProducts(sortedProducts);
        }
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching deals:", err.message);
        }
      }
    }

    getD();
  }, []);

  return products;
}

export default useTopDeals;
