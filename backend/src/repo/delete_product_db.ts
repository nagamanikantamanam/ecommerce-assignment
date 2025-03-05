import { getpoolinstance } from "../db/getpoolinstance";

const delete_product_db = async (productid: number): Promise<{ status: boolean, message: string }> => {
  const pool = await getpoolinstance();

  try {
    const query = `
      delete from products
      where product_id = $1;
    `;

    const result = await pool.query(query, [productid]);
    let rc=result.rowCount||0;
    if (rc > 0) {
      return {
        status: true,
        message: 'product deleted successfully.',
      };
    } else {
      return {
        status: false,
        message: 'product not found.',
      };
    }
  } catch (error) {
    console.error('Error deleting product in db:', error);
    return {
      status: false,
      message: 'error deleting product.',
    };
  }
};

export { delete_product_db };
