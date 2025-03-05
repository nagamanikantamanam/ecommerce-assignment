import { update_order_status_db } from "../repo/update_order_status_db";

const update_order_status_service = async (
  order_id: number, 
  new_status_code: number
): Promise<{ statusCode: number, data: { status: boolean, message: string } }> => {
  try {
    const isUpdated = await update_order_status_db(order_id, new_status_code);

    if (!isUpdated) {
      return {
        statusCode: 400,
        data: {
          status: false,
          message: 'Order not found or cannot be updated.',
        },
      };
    }

    return {
      statusCode: 200,
      data: {
        status: true,
        message: 'Order status has been successfully updated.',
      },
    };
  } catch (error) {
    console.error('Error in update_order_status_service:', error);

    return {
      statusCode: 500,
      data: {
        status: false,
        message: 'Internal Server Error, please try again later.',
      },
    };
  }
};

export { update_order_status_service };
