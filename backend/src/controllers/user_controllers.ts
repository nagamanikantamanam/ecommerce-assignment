import { Request, Response } from 'express';
import { add_user_service } from '../services/add_user_service'; 
import {update_user_service} from '../services/update_user_service';
import {hash} from 'bcrypt';
const add_user = async (req: Request, res: Response): Promise<any> => {
  const { username, password, mobile, email } = req.body;
  console.log(password);
  const hashedpassword= await hash(password, 10);

  try {
    
    const response = await add_user_service(username, hashedpassword, mobile, email);

    
    return res.status(response.statusCode).json(response.data);
  } catch (error) {
    console.error('Error while adding user:', error);

    return res.status(500).json({
      status: false,
      message: 'Internal Server Error, please try again later.',
    });
  }
};

export { add_user };
const update_user = async (req: Request, res: Response): Promise<any> => {
  console.log('update user');
  const {  email, mobile } = req.body;
  const user_id=req.user_id||0;
  

  try {
    const response = await update_user_service(user_id, email, mobile);

    return res.status(response.statusCode).json(response.data);
  } catch (error) {
    console.error('Error while updating the user:', error);

    return res.status(500).json({
      status: false,
      message: 'Internal Server Error, please try again later.',
    });
  }
};

export { update_user };
