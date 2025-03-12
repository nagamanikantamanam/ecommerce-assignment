import { getpoolinstance } from '../db/getpoolinstance'; 

const get_single_product_db = async (product_id: string): Promise<{ status: boolean, product: any, message: string }> => {
  const pool = await getpoolinstance();

  try {
    const query = `
      select p.*,(select avg(rating) from reviews as r  where r.product_id=p.product_id) as avg_rating from products as p where p.product_id=$1;
    `;

    const params: any[] = [product_id];
    
    const result = await pool.query(query, params);

    if (result.rows.length > 0) {
      return {
        status: true,
        product: result.rows[0], 
        message: 'Product fetched successfully.',
      };
    } else {
      return {
        status: false,
        product: null,
        message: 'Product not found.',
      };
    }
  } catch (error) {
    console.error('Error fetching product from DB:', error);
    return {
      status: false,
      product: null,
      message: 'Error fetching product.',
    };
  }
};

export { get_single_product_db };
