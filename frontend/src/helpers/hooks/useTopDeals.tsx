import { useEffect, useState } from "react";
import { ProductType } from "../../utils/Types/CommonTypes";
import { public_api } from "../../utils/api";

function useTopDeals() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function getD() {
      try {
        let response = await public_api.get<{ products: ProductType[] }>(
          "/products"
        );

        if (response.data && response.data.products) {
          const sortedProducts: ProductType[] = response.data.products.slice(0, 10);

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
