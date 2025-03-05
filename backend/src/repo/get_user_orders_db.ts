import { getpoolinstance } from "../db/getpoolinstance";

const get_user_orders_db = async (user_id: number): Promise<any> => {
  const pool = await getpoolinstance();

  try {
    const query = `
      SELECT * 
      FROM orders 
      WHERE user_id = $1;
    `;
    const res = await pool.query(query, [user_id]);

    return res.rows; // Returns the list of orders for the user
  } catch (error) {
    console.error('Error fetching user orders:', error);
    throw new Error('Error fetching user orders');
  }
};

export { get_user_orders_db };
