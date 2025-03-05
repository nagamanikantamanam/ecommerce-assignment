import { get_user } from "../repo/get_user";
import { compare } from "bcrypt";
import {sign} from "jsonwebtoken";
import { update_refreshtoken } from "../repo/update_refreshtoken";

const user_login_service = async (
  mobile: string,
  email: string,
  password: string
): Promise<{ statuscode: number;data:{ message: string; username?:string; user_id?:string; accessToken?: string; refreshToken?: string }}> => {
  
  let res = await get_user(email, mobile);
  
  if (res.status) {
    const user = res.data;
    
    
    const match = await compare(password, user.password);
    
    if (match) {
      
      const accessToken = sign({ user_id: user.user_id, email: user.email ,mobile:user.mobile,role:user.role_id}, "your-secret-key", { expiresIn: "1d" });
      const refreshToken = sign({ user_id: user.user_id, email: user.email,mobile:user.mobile,role:user.role_id }, "your-refresh-secret-key", { expiresIn: "7d" });
      await update_refreshtoken(email,mobile,refreshToken);
    
      return {
        statuscode: 200,
        data:{
        user_id:user.user_id,
        username:user.name,
        message: "Login successful",
        accessToken,
        refreshToken
        }
      };
    } else {
      return { statuscode: 401,data:{ message: "Password not matched" }};
    }
  }
  
  
  return { statuscode: 404, data:{message: "User not found" }};
};

export { user_login_service };
