import { create_order_db } from '../repo/create_order_db';

const create_order_service = async (user_id: number, product_id: number, status_id: number): Promise<{ statusCode: number, data: { status: boolean, message: string } }> => {
  try {
    const result = await create_order_db(user_id, product_id, status_id);

    if (result.status) {
      return {
        statusCode: 201,
        data: {
          status: true,
          message: 'order created successfully.',
        },
      };
    } else {
      return {
        statusCode: 400,
        data: {
          status: false,
          message: 'error creating order.',
        },
      };
    }
  } catch (error) {
    console.error('Error in create_order_service:', error);
    return {
      statusCode: 500,
      data: {
        status: false,
        message: 'error creating order.',
      },
    };
  }
};

export { create_order_service };
