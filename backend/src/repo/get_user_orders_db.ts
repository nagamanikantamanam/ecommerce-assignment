import { getpoolinstance } from "../db/getpoolinstance";

const get_user_orders_db = async (user_id: number): Promise<any> => {
  const pool = await getpoolinstance();

  try {
    const query = `
     SELECT o.order_id,os.status_name, p.title, os.status_name
FROM orders AS o
INNER JOIN products AS p ON p.product_id = o.product_id
INNER JOIN order_status AS os ON os.status_code = o.status_code where o.user_id=$1;
    `;


    const res = await pool.query(query, [user_id]);

    return res.rows; 
  } catch (error) {
    console.error('Error fetching user orders:', error);
    throw new Error('Error fetching user orders');
  }
};

export { get_user_orders_db };
