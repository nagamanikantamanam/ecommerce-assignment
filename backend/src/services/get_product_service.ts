import { get_single_product_db } from '../repo/get_single_product_db';
import { get_product_reviews_db } from '../repo/get_product_reviews_db';

const get_product_service = async (product_id: string): Promise<{ statusCode: number, data: { status: boolean, product: any, message: string } }> => {
  try {
    const product_result = await get_single_product_db(product_id);

    if (product_result.status && product_result.product) {
     
      const reviews_result = await get_product_reviews_db(product_id);

     
      const product_with_reviews = {
        ...product_result.product,
        reviews: reviews_result.reviews,
      };

      return {
        statusCode: 200,
        data: {
          status: true,
          product: product_with_reviews,
          message: 'Product fetched successfully.',
        },
      };
    } else {
      return {
        statusCode: 404,
        data: {
          status: false,
          product: null,
          message: 'Product not found.',
        },
      };
    }
  } catch (error) {
    console.error('Error in get_single_product_service:', error);
    return {
      statusCode: 500,
      data: {
        status: false,
        product: null,
        message: 'Error fetching product.',
      },
    };
  }
};

export { get_product_service };
