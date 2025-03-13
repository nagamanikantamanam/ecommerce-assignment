import { getpoolinstance } from '../db/getpoolinstance'; 
import CustomError from '../utils/customerror';
const add_review_db = async ({
  user_id,
  order_id,
  rating,
  review,
  product_id,
}: {
  user_id: number;
  order_id: number;
  rating: number;
  review: string;
  product_id: number;
}): Promise<{ status: boolean, message: string }> => {
  const pool = await getpoolinstance();

  try {
    const query = `
    CALL insert_review_and_update_stock($1, $2, $3, $4, $5);`;

    const params = [user_id, order_id, rating, review,product_id];
    
    const result = await pool.query(query, params);
    console.log("result");
    console.log(result);
    
      return {
        status: true,
        message: 'Review added successfully.',
      };
   
  } catch (error) {
    console.error('Error adding review to DB:', error);
    return {
      status: false,
      message: 'Error adding review to the database.',
    };
  }
};

export { add_review_db };
