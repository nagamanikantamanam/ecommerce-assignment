import { getpoolinstance } from "../db/getpoolinstance";
import CustomError from '../utils/customerror';

const add_product_db = async (
  title: string,
  category: string,
  price: number,
  description: string,
  discount: number,
  image: string,
  stock: number
  ): Promise<{ status: boolean, message: string }> => {
  const pool = await getpoolinstance();
console.log("repo level add ")
  try {
    
    const query = `
      INSERT INTO PRODUCTS(title, category, price, description, discount, image, stock)
      VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;

    const res = await pool.query(query, [
      title,
      category,
      price,
      description,
      discount,
      image,
      stock,
    ]);
    
    console.log(res)
    let rc: number = res.rowCount || 0;
    if (rc > 0) {
      return {
        status: true,
        message: "Product added successfully",
      };
    } else {
      console.log("db  errror")
      throw new CustomError("Database error: Product not added", 500,"REPO_LEVEL");
    }
  } catch (error:any) {
   
    if (error?.code) {
     
      throw new CustomError(error.message, 500,"REPO_LEVEL");
    } else {
      
       throw new CustomError("Server error", 500,"REPO_LEVEL");
    }
  }
};

export { add_product_db };
