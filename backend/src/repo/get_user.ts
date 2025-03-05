import { getpoolinstance } from "../db/getpoolinstance";

async function get_user(email: string, mobile: string): Promise<any> {
  const pool = await getpoolinstance();
  try {
    
    
    const query = "SELECT * FROM USERS WHERE email=$1 OR mobile=$2";
    
    
    const res = await pool.query(query, [email, mobile]);
    
    
    if (res.rows.length > 0) {
      
      return {
        status: true,
        message: "User found",
        data: res.rows[0], 
      };
    } else {
      
      return {
        status: false,
        message: "User not found",
      };
    }
  } catch (error) {
    
    console.error('Error while fetching user:', error);

    
    return {
      status: false,
      message: 'Internal Server Error, please try again later.',
    };
  }
}

export { get_user };
async function get_user_with_rk(refresh_token: string): Promise<any> {
    const pool = await getpoolinstance();
    try {
      
      
      const query = "SELECT * FROM USERS WHERE refresh_token=$1";
      
      
      const res = await pool.query(query, [refresh_token]);
      
      
      if (res.rows.length > 0) {
        
        return {
          status: true,
          message: "User found",
          data: res.rows[0], 
        };
      } else {
        
        return {
          status: false,
          message: "User not found",
        };
      }
    } catch (error) {
      
      console.error('Error while fetching user:', error);
  
      
      return {
        status: false,
        message: 'Internal Server Error, please try again later.',
      };
    }
  }
  
  export { get_user_with_rk };
  