import { get_all_orders_db } from "../repo/get_all_orders_db";

const get_all_orders_service = async (): Promise<{ statusCode: number, data: any }> => {
  try {
    const orders = await get_all_orders_db();

    if (orders.length === 0) {
      return {
        statusCode: 404,
        data: {
          status: false,
          message: 'No orders found.',
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
    console.error('Error in get_all_orders_service:', error);

    return {
      statusCode: 500,
      data: {
        status: false,
        message: 'Internal Server Error, please try again later.',
      },
    };
  }
};

export { get_all_orders_service };
