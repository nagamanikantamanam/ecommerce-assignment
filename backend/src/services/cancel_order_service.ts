import { cancel_order_db } from "../repo/cancel_order_db";

const cancel_order_service = async (order_id: number, user_id: number): Promise<{ statusCode: number, data: { status: boolean, message: string } }> => {
  try {
    const iscanceled = await cancel_order_db(order_id, user_id);

    if (!iscanceled) {
      return {
        statusCode: 400,
        data: {
          status: false,
          message: 'Order not found, already cancelled, or cannot be cancelled (order is shipped or delivered).',
        },
      };
    }

    return {
      statusCode: 200,
      data: {
        status: true,
        message: 'Order has been successfully cancelled.',
      },
    };
  } catch (error) {
    console.error('Error in cancel_order_service:', error);

    return {
      statusCode: 500,
      data: {
        status: false,
        message: 'Internal Server Error, please try again later.',
      },
    };
  }
};

export { cancel_order_service };
