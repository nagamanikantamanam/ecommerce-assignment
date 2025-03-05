import { add_review_db } from '../repo/add_review_db';

const add_review_service = async ({
  user_id,
  order_id,
  rating,
  review,
  product_id,
}: {
  user_id: number;
  order_id: number;
  rating: number;
  review: string;
  product_id: number;
}): Promise<{ statusCode: number, data: { status: boolean, message: string } }> => {
  try {
    const result = await add_review_db({
      user_id,
      order_id,
      rating,
      review,
      product_id,
    });
console.log(result)
    if (result.status) {
      return {
        statusCode: 201,
        data: {
          status: true,
          message: 'Review added successfully.',
        },
      };
    } else {
      return {
        statusCode: 400,
        data: {
          status: false,
          message: result.message,
        },
      };
    }
  } catch (error) {
    console.error('Error in add_review_service:', error);
    return {
      statusCode: 500,
      data: {
        status: false,
        message: 'Error adding review.',
      },
    };
  }
};

export { add_review_service };
