import { get_user_orders_db } from "../repo/get_user_orders_db";

const get_user_orders_service = async (user_id: number): Promise<{ statusCode: number, data: any }> => {
  try {
    const orders = await get_user_orders_db(user_id);

    if (orders.length === 0) {
      return {
        statusCode: 404,
        data: {
          status: false,
          message: 'No orders found for this user.',
        },
      };
    }

    return {
      statusCode: 200,
      data: {
        status: true,
        orders: orders,
      },
    };
  } catch (error) {
    console.error('Error in get_user_orders_service:', error);

    return {
      statusCode: 500,
      data: {
        status: false,
        message: 'Internal Server Error, please try again later.',
      },
    };
  }
};

export { get_user_orders_service };
