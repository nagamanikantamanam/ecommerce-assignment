import { get_all_products_db } from '../repo/get_all_products_db';

const get_all_products_service = async ({
  searchquery,
  category,
  minp,
  maxp,
  minrat,
}: {
  searchquery: string;
  category: string;
  minp: number;
  maxp: number;
  minrat: number;
}): Promise<{ statusCode: number, data: { status: boolean, products: any[], message: string } }> => {
  try {
    const result = await get_all_products_db(searchquery, category, minp, maxp, minrat);

    if (result.status && result.products.length > 0) {
      return {
        statusCode: 200,
        data: {
          status: true,
          products: result.products,
          message: 'Products fetched successfully.',
        },
      };
    } else {
      return {
        statusCode: 404,
        data: {
          status: false,
          products: [],
          message: 'No products found.',
        },
      };
    }
  } catch (error) {
    console.error('Error in get_all_products_service:', error);
    return {
      statusCode: 500,
      data: {
        status: false,
        products: [],
        message: 'Error fetching products.',
      },
    };
  }
};

export { get_all_products_service };
