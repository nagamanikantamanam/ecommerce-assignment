import { getpoolinstance } from "../db/getpoolinstance";

const get_all_products_db = async (
  searchquery: string,
  category: string,
  minp: number,
  maxp: number,
  minrat: number
): Promise<{ status: boolean, products: any[], message: string }> => {
  const pool = await getpoolinstance();
  
  try {
    let query = `
      SELECT P.*, (SELECT AVG(R.rating) FROM reviews AS R WHERE R.product_id = P.product_id) AS average_rating
      FROM products AS P
      WHERE (P.price >= $1 AND P.price <= $2 
      AND (SELECT AVG(R.rating) FROM reviews AS R WHERE R.product_id = P.product_id) >=$3) 
      AND (P.category=$4 or P.title ILIKE '%'||$5||'%');
    `;



    
    const params: any[] = [minp, maxp, minrat, category, searchquery];
    
    
    const result = await pool.query(query,params);
  
    if (result.rows.length > 0) {
      return {
        status: true,
        products: result.rows,
        message: 'Products fetched successfully.',
      };
    } else {
      return {
        status: false,
        products: [],
        message: 'No products found.',
      };
    }
  } catch (error) {
    console.error('Error fetching products from DB:', error);
    return {
      status: false,
      products: [],
      message: 'Error fetching products.',
    };
  }
};

export { get_all_products_db };
