import { getpoolinstance } from "../db/getpoolinstance";

const create_order_db = async (user_id: number, product_id: number, status_id: number): Promise<{ status: boolean, message: string }> => {
  const pool = await getpoolinstance();

  try {
    const query = `
      INSERT INTO orders(user_id, product_id, status_code)
      VALUES ($1, $2, $3)
      RETURNING order_id;
    `;

    const result = await pool.query(query, [user_id, product_id, status_id]);
    let rc=result.rowCount|| 0;
    if (rc> 0) {
      return {
        status: true,
        message: `order created successfully with order_id: ${result.rows[0].order_id}`,
      };
    } else {
      return {
        status: false,
        message: 'error creating order.',
      };
    }
  } catch (error) {
    console.error('Error inserting order into db:', error);
    return {
      status: false,
      message: 'error creating order.',
    };
  }
};

export { create_order_db };
