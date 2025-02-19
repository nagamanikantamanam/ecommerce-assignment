import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../../utils/Types/CommonTypes";
import { api_public } from "../../utils/api";

function useProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      try {
        const response = await api_public.get<ProductType>(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getProduct();
    }
  }, [id]);

  return { product, loading };
}

export default useProduct;
