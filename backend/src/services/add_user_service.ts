import { check_user_exists } from "../repo/check_user_exists";
import { add_user_db } from "../repo/add_user_db";

const add_user_service = async (
  username: string,
  password: string,
  mobile: number,
  email: string
): Promise<{ statusCode: number, data: { status: boolean, message: string } }> => {
  
  
  let user_exists = await check_user_exists(mobile, email);
  console.log('User exists:', user_exists);

  if (!user_exists.status) {
    
    return {
      statusCode: 409,
      data: {
        status: false,
        message: 'User with the given mobile or email already exists.'
      }
    };
  } else {
   
    const response = await add_user_db(mobile, email, password, username);
    console.log("Database response:", response);

    
    return {
      statusCode: 200,
      data: {
        status: true,
        message: 'User added successfully!',
      }
    };
  }
};

export { add_user_service };
