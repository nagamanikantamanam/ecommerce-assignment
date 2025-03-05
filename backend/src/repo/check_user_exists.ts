import { getpoolinstance } from "../db/getpoolinstance";

const check_user_exists=  async ( mobile: number, email: string): Promise<{ status: boolean, message: string }> =>{
    const pool = await getpoolinstance(); 

    try {
        const query = `
            SELECT * FROM USERS WHERE mobile = $1 OR email = $2;
        `;
        const res = await pool.query(query, [mobile, email]);

        if (res.rows.length > 0) {
            return {
                status: false,
                message: 'Mobile number or email already exists.',
            };
        } else {
            return {
                status: true,
                message: 'Mobile and email are available.',
            };
        }
    } catch (error) {
        console.error('Error checking user existence:', error);
        return {
            status: false,
            message: 'Error checking user existence.',
        };
    }
}

export { check_user_exists };
