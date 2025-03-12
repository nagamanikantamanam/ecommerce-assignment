import { update_user_db } from "../repo/update_user_db";

const update_user_service = async (
  user_id: number,
  email: string,
  mobile: string
): Promise<{ statusCode: number, data: { status: boolean, message: string } }> => {
  try {
    const isUpdated = await update_user_db(user_id, email, mobile);

    if (!isUpdated) {
      return {
        statusCode: 400,
        data: {
          status: false,
          message: 'User not found or invalid data.',
        },
      };
    }

    return {
      statusCode: 200,
      data: {
        status: true,
        message: 'User details have been successfully updated.',
      },
    };
  } catch (error) {
    console.error('Error in update_user_service:', error);

    return {
      statusCode: 500,
      data: {
        status: false,
        message: 'Internal Server Error, please try again later.',
      },
    };
  }
};

export { update_user_service };
