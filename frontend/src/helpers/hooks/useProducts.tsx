import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchProducts } from "../SearchProducts";

import { ProductType } from "../../utils/Types/CommonTypes";
function useProducts() {
  console.log("inside use products")
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  
  
  
  const searchQuery = searchParams.get('searchquery') || '';
  const category = searchParams.get('category') || '';
  const minPrice = searchParams.get('minp') || '10';
  const maxPrice = searchParams.get('maxp') || '100000';
  const minRating = searchParams.get('minrat') || '0';
  console.log(searchQuery,category,minPrice,maxPrice,minRating)
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        console.log("search products called ");
        const fetchedProducts =await SearchProducts(searchQuery,category,minPrice,maxPrice,minRating);
        console.log(fetchProducts);  
        setProducts(fetchedProducts);
        console.log("fetched");
       
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery,category,minPrice,maxPrice,minRating]);
 
  return { products, loading };
}

export default useProducts;
