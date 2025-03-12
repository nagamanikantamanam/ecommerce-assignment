import { getpoolinstance } from "../db/getpoolinstance";

const update_user_db = async (
  user_id: number,
  email: string,
  mobile: string
): Promise<boolean> => {
  const pool = await getpoolinstance();

  try {
    const query = `
      UPDATE users
      set  email = $1, mobile = $2
      WHERE user_id = $3;
    `;
    const res = await pool.query(query, [ email, mobile, user_id]);

    if (res.rowCount === 0) {
      return false; 
    }
    return true; 
  } catch (error) {
    console.error('Error updating user details:', error);
    throw new Error('Error updating user details');
  }
};

export { update_user_db };
