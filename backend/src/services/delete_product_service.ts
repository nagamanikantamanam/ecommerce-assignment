import { delete_product_db } from '../repo/delete_product_db';

const delete_product_service = async (productid: number): Promise<{ statusCode: number, data: { status: boolean, message: string } }> => {
  try {
    const result = await delete_product_db(productid);

    if (result.status) {
      return {
        statusCode: 200,
        data: {
          status: true,
          message: 'product deleted successfully.',
        },
      };
    } else {
      return {
        statusCode: 404,
        data: {
          status: false,
          message: 'product not found.',
        },
      };
    }
  } catch (error) {
    console.error('Error in delete_product_service:', error);
    return {
      statusCode: 500,
      data: {
        status: false,
        message: 'error deleting product.',
      },
    };
  }
};

export { delete_product_service };
