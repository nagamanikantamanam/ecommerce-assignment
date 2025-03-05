import { get_user_with_rk } from "../repo/get_user";
import { verify } from "jsonwebtoken";
import { sign } from "jsonwebtoken";
import { update_refreshtoken } from "../repo/update_refreshtoken";
const user_logout_service = async (refresh_token:string):Promise<{ statuscode: number;data:{ message: string;  accesstoken?: string; }}> => {
   
    
    const ACCESS_TOKEN_SECRET:string=process.env.ACCESS_TOKEN_SECRET||'';
    const REFRESH_TOKEN_SECRET:string=process.env.REFRESH_TOKEN_SECRET||'';
    const founduser = await get_user_with_rk(refresh_token);
  try{
   
   const decoded=verify(refresh_token,REFRESH_TOKEN_SECRET);
  
   let decoded_eamil:string='';
   let decoded_mobile:string='';
   if(typeof decoded!='string'){
    decoded_eamil=decoded.email;
    decoded_mobile=decoded.mobile;
   }
   
   if(founduser.data.email==decoded_eamil || founduser.data.mobile==decoded_mobile){
   
    await update_refreshtoken(decoded_eamil,decoded_mobile,'');
    return {statuscode:200,data:{message:"user loged out"}}
   }
  }catch(err){
    console.log(err)
  }
       
    return {statuscode:403,data:{message:"failed to logout"}};
}

export {user_logout_service};