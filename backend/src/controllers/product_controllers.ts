import { Request, Response } from 'express';
import { add_product_service } from '../services/add_product_service';
import { update_stock_service } from '../services/update_stock_service';
import { get_all_products_service } from '../services/get_all_products_service';
import { delete_product_service } from '../services/delete_product_service';
import { get_product_service } from '../services/get_product_service';

import { add_review_service } from '../services/add_review_service';
const add_product = async (req: Request, res: Response): Promise<any> => {
  const { title, category, price, description, discount, image, stock } = req.body;

  try {
    const response = await add_product_service(
      title,
      category,
      price,
      description,
      discount,
      image,
      stock
    );

    return res.status(response.statusCode).json(response.data);
  } catch (error) {
    console.error('Error while adding product:', error);

    return res.status(500).json({
      status: false,
      message: 'Internal Server Error, please try again later.',
    });
  }
};

export { add_product };




const update_stock = async (req: Request, res: Response): Promise<any> => {
  const { product_id, stock } = req.body;

  
  if (!product_id || stock === undefined) {
    return res.status(400).json({
      status: false,
      message: 'Product ID and stock are required.',
    });
  }

  try {
    const response = await update_stock_service(product_id, stock);

    return res.status(response.statusCode).json(response.data);
  } catch (error) {
    console.error('Error while updating stock:', error);

    return res.status(500).json({
      status: false,
      message: 'Internal Server Error, please try again later.',
    });
  }
};

export { update_stock };


const delete_product = async (req: Request, res: Response): Promise<any> => {
  const { productid } = req.params;

  
  if (!productid) {
    return res.status(400).json({
      status: false,
      message: 'productid is required.',
    });
  }

  try {
    const delete_response = await delete_product_service(Number(productid));

    return res.status(delete_response.statusCode).json(delete_response.data);
  } catch (error) {
    console.error('Error while deleting product:', error);

    return res.status(500).json({
      status: false,
      message: 'internal server error, please try again later.',
    });
  }
};

export { delete_product };


const get_all_products = async (req: Request, res: Response): Promise<any> => {
  const { searchquery, category, minp, maxp, minrat } = req.query;
  console.log("566666",searchquery,category,minp,maxp,minrat);
  try {
    const products_response = await get_all_products_service({
      searchquery: searchquery as string || '',
      category: category as string || '',
      minp: minp ? parseFloat(minp as string) : 0,
      maxp: maxp ? parseFloat(maxp as string) : 1000000000,
      minrat: minrat ? parseFloat(minrat as string) : 0,
    });

    return res.status(products_response.statusCode).json(products_response.data);
  } catch (error) {
    console.error('Error while getting all products:', error);

    return res.status(500).json({
      status: false,
      message: 'Internal server error, please try again later.',
    });
  }
};

export { get_all_products };

const get_product = async (req: Request, res: Response): Promise<any> => {
  const { product_id } = req.params;
  console.log("Fetching single product with ID:", product_id);
  try {
    const product_response = await get_product_service(product_id);

    return res.status(product_response.statusCode).json(product_response.data);
  } catch (error) {
    console.error('Error while getting product:', error);

    return res.status(500).json({
      status: false,
      message: 'Internal server error, please try again later.',
    });
  }
};



export {get_product}



const add_review = async (req: Request, res: Response): Promise<any> => {
  console.log("reviweeee")
  const { user_id, order_id, rating, review, product_id } = req.body;

  console.log("Adding review:", { user_id, order_id, rating, review, product_id });
   
  try {
    
    const review_response = await add_review_service({
    user_id,
      order_id,
      rating,
      review,
      product_id,
    });

    return res.status(review_response.statusCode).json(review_response.data); 
   
  } catch (error) {
    console.error('Error while adding review:', error);

    return res.status(500).json({
      status: false,
      message: 'Internal server error, please try again later.',
    });
  }
};

export { add_review };
