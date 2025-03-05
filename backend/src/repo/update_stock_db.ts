import { getpoolinstance } from "../db/getpoolinstance";

const update_stock_db = async (product_id: number, stock: number): Promise<{ status: boolean, message: string }> => {
  const pool = await getpoolinstance();
 
  try {
    const query = `
      UPDATE PRODUCTS
      SET stock = $1
      WHERE product_id = $2;
    `;

    const result = await pool.query(query, [stock, product_id]);
    
    let rc=result.rowCount || 0;
    if (rc > 0) {
      return {
        status: true,
        message: 'Stock updated successfully.',
      };
    } else {
      return {
        status: false,
        message: 'Product not found.',
      };
    }
  } catch (error) {
    console.error('Error updating stock in DB:', error);
    return {
      status: false,
      message: 'Error updating stock.',
    };
  }
};

export { update_stock_db };
