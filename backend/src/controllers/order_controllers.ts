import { Request, Response } from 'express';
import { create_order_service } from '../services/create_order_service';
import { get_user_orders_service } from '../services/get_user_order_service';
import { get_all_orders_service } from '../services/get_all_orders_service';
import { cancel_order_service } from '../services/cancel_order_service';
import { update_order_status_service } from '../services/update_order_status_service';
const create_order = async (req: Request, res: Response): Promise<any> => {
  const {  product_id } = req.body;
  console.log("ordering started");
  const user_id=req.user_id
  if (!user_id || !product_id ) {
    return res.status(400).json({
      status: false,
      message: 'user_id, product_id, and status_id are required.',
    });
  }
console.log("ordering started");
console.log(product_id)
  try {
    const order_response = await create_order_service(user_id, product_id, 1);

    return res.status(order_response.statusCode).json(order_response.data);
  } catch (error) {
    console.error('Error while creating order:', error);

    return res.status(500).json({
      status: false,
      message: 'internal server error, please try again later.',
    });
  }
};

export { create_order };




const get_user_orders = async (req: Request, res: Response): Promise<any> => {
  const user_id = Number(req.user_id); 
  console.log('user_id',req.body);
  console.log("hiiiii");

  try {
    const response = await get_user_orders_service(user_id);

    return res.status(response.statusCode).json(response.data.orders);
  } catch (error) {
    console.error('Error while fetching user orders:', error);

    return res.status(500).json({
      status: false,
      message: 'Internal Server Error, please try again later.',
    });
  }
};

export { get_user_orders };


const cancel_order = async (req: Request, res: Response): Promise<any> => {
    console.log('cnacellll')
  const user_id= Number(req.user_id); 
  const order_id = parseInt(req.params.order_id, 10); 

  try {
    const response = await cancel_order_service(order_id, user_id);

    return res.status(response.statusCode).json(response.data);
  } catch (error) {
    console.error('Error while canceling the order:', error);

    return res.status(500).json({
      status: false,
      message: 'Internal Server Error, please try again later.',
    });
  }
};

export { cancel_order };




const get_all_orders = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await get_all_orders_service();

    return res.status(response.statusCode).json(response.data);
  } catch (error) {
    console.error('Error while fetching all orders:', error);

    return res.status(500).json({
      status: false,
      message: 'Internal Server Error, please try again later.',
    });
  }
};

export { get_all_orders };

const update_order_status = async (req: Request, res: Response): Promise<any> => {
    console.log('update order status');
    const {  new_status_code ,order_id} = req.body;
   
  
    try {
      const response = await update_order_status_service(order_id,  new_status_code);
  
      return res.status(response.statusCode).json(response.data);
    } catch (error) {
      console.error('Error while updating the order status:', error);
  
      return res.status(500).json({
        status: false,
        message: 'Internal Server Error, please try again later.',
      });
    }
  };
  
  export { update_order_status };
  