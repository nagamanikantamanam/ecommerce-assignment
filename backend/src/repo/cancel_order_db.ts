import { getpoolinstance } from "../db/getpoolinstance";

const cancel_order_db = async (order_id: number, user_id: number): Promise<boolean> => {
  const pool = await getpoolinstance();

  try {
    const query = `
      UPDATE orders
      SET status_code = 5
      WHERE order_id = $1 AND user_id = $2;
    `;
    const res = await pool.query(query, [order_id, user_id]);

    if (res.rowCount === 0) {
      return false; 
    }
    return true; 
  } catch (error) {
    console.error('Error canceling order:', error);
    throw new Error('Error canceling order');
  }
};

export { cancel_order_db };
