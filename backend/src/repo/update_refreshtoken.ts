import { getpoolinstance } from "../db/getpoolinstance";

async function update_refreshtoken(email: string, mobile: string,refreshtoken:string): Promise<any> {
  const pool = await getpoolinstance();
  try {
    
    
    const query = "update users set refresh_token=$1 where email=$2 or mobile=$3;";
    
    
    const res = await pool.query(query, [refreshtoken,email, mobile]);
    return {
        status:true,
        message:"refresh token updated"
    }
    
   
    }
   catch (error) {
    
    console.error('Error while fetching user:', error);

    
    return {
      status: false,
      message: 'Internal Server Error, please try again later.',
    };
  }
}

export { update_refreshtoken };
