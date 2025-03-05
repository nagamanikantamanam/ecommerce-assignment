import { getpoolinstance } from "../db/getpoolinstance";

const update_order_status_db = async (
  order_id: number, 
  new_status_code: number
): Promise<boolean> => {
  const pool = await getpoolinstance();

  try {
    const query = `
      UPDATE orders
      SET status_code = $1
      WHERE order_id = $2 ;
    `;
    const res = await pool.query(query, [new_status_code, order_id]);

    if (res.rowCount === 0) {
      return false; 
    }
    return true; 
  } catch (error) {
    console.error('Error updating order status:', error);
    throw new Error('Error updating order status');
  }
};

export { update_order_status_db };
