import { getpoolinstance } from "../db/getpoolinstance";
const get_product_reviews_db = async (product_id: string): Promise<{ reviews: any[], message: string }> => {
    const pool = await getpoolinstance();
  
    try {
      const query = `
        SELECT * 
        FROM reviews 
        WHERE product_id = $1;
      `;
  
      const params: any[] = [product_id];
      
      const result = await pool.query(query, params);
  
      return {
        reviews: result.rows,
        message: 'Reviews fetched successfully.',
      };
    } catch (error) {
      console.error('Error fetching reviews from DB:', error);
      return {
        reviews: [],
        message: 'Error fetching reviews.',
      };
    }
  };
  
  export { get_product_reviews_db };
  