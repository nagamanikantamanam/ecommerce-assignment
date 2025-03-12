import { add_product_db } from "../repo/add_product_db";
import CustomError from "../utils/customerror";

const add_product_service = async (
  title: string,
  category: string,
  price: number,
  description: string,
  discount: number,
  image: string,
  stock: number
): Promise<{ statusCode: number, data: { status: boolean, message: string } }> => {
  
  console.log("add product service");

  try {
    const response = await add_product_db(
      title,
      category,
      price,
      description,
      discount,
      image,
      stock
    );

    return {
      statusCode: 200,
      data: {
        status: true,
        message: 'Product added successfully!',
      },
    };
  } catch (error) {
    
    if(error instanceof CustomError){
      console.log("errr in service in custom")
      throw error;
    }
    throw new CustomError("Internal server Error",500,"SERVICE_LEVEL");
  }
};

export { add_product_service };
