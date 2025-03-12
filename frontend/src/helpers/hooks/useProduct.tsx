import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../../utils/Types/CommonTypes";
import { api_public } from "../../utils/api";

function useProduct() {
  const { id } = useParams();
  console.log('id',id)
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState<boolean>(true);
console.log("rtfygjhkhhg")
  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      try {
        console.log("tryyy")
        const response = await api_public.get<ProductType>(`/product/${id}`);
        console.log(response.data)
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
