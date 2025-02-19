import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchProducts, ProductsByCat } from "../search_products";
import { useParams } from "react-router-dom";
import { ProductType } from "../../utils/Types/CommonTypes";
function useProducts() {
  //console.log("inside hook");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const params = useParams();
  const mode = params.mode || "search";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const fetchedProducts =
          mode === "search"
            ? await SearchProducts(query)
            : await ProductsByCat(query);
        setProducts(fetchedProducts);
        console.log(mode + "mode");
      } catch (error) {
        //console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query, mode]);
  //console.log("before return");
  return { products, loading, query, mode };
}

export default useProducts;
