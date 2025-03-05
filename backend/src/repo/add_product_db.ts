import { getpoolinstance } from "../db/getpoolinstance";

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
    console.log(res);
    return {
      status: true,
      message: "Product added successfully",
    };
  } catch (error) {
    console.error('Error adding product:', error);
    return {
      status: false,
      message: 'Error while adding product.',
    };
  }
};

export { add_product_db };
