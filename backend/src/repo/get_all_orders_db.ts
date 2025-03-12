import { getpoolinstance } from "../db/getpoolinstance";

const get_all_orders_db = async (): Promise<any[]> => {
  const pool = await getpoolinstance();

  try {
    const query = `
      select o.order_id,p.title,o.status_code from orders as o inner join products as p on p.product_id=o.product_id ;
    `;
    const res = await pool.query(query);

    return res.rows; 
  } catch (error) {
    console.error('Error fetching all orders:', error);
    throw new Error('Error fetching all orders');
  }
};

export { get_all_orders_db };
