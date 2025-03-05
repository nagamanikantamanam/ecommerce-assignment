import { add_product_db } from "../repo/add_product_db";

const add_product_service = async (
  title: string,
  category: string,
  price: number,
  description: string,
  discount: number,
  image: string,
  stock: number
): Promise<{ statusCode: number, data: { status: boolean, message: string } }> => {
  
  

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
    console.error('Error adding product:', error);
    return {
      statusCode: 500,
      data: {
        status: false,
        message: 'Internal server error while adding product.',
      },
    };
  }
};

export { add_product_service };
