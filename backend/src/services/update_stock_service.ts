import { update_stock_db } from '../repo/update_stock_db';

const update_stock_service = async (product_id: number, stock: number): Promise<{ statusCode: number, data: { status: boolean, message: string } }> => {
  try {
    const result = await update_stock_db(product_id, stock);
    
    if (result.status) {
      return {
        statusCode: 200,
        data: {
          status: true,
          message: 'Stock updated successfully.',
        },
      };
    } else {
      return {
        statusCode: 404,
        data: {
          status: false,
          message: 'Product not found.',
        },
      };
    }
  } catch (error) {
    console.error('Error in update_stock_service:', error);
    return {
      statusCode: 500,
      data: {
        status: false,
        message: 'Error updating stock.',
      },
    };
  }
};

export { update_stock_service };
