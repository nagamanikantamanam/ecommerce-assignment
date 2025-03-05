import { get_user_with_rk } from "../repo/get_user";
import { verify } from "jsonwebtoken";
import { sign } from "jsonwebtoken";

const refresh_token_service = async (refresh_token:string):Promise<{ statuscode: number;data:{ message: string;  accesstoken?: string; }}> => {
   
    
    const ACCESS_TOKEN_SECRET:string=process.env.ACCESS_TOKEN_SECRET||'';
    const REFRESH_TOKEN_SECRET:string=process.env.REFRESH_TOKEN_SECRET||'';
    const founduser = await get_user_with_rk(refresh_token);
  try{
    console.log("rf:",REFRESH_TOKEN_SECRET);
    console.log(refresh_token);
   const decoded=verify(refresh_token,REFRESH_TOKEN_SECRET);
  
   let decoded_eamil:string='';
   let decoded_mobile:string='';
   if(typeof decoded!='string'){
    decoded_eamil=decoded.email;
    decoded_mobile=decoded.mobile;
   }
   
   if(founduser.data.email==decoded_eamil || founduser.data.mobile==decoded_mobile){
   
    const accesstoken = sign({ userId: founduser.id, email: founduser.email }, ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
    return {statuscode:200,data:{message:"acess toekn refreshed",accesstoken}}
   }
  }catch(err){
    console.log(err)
  }
       
    return {statuscode:403,data:{message:"failed to restore acess token"}};
}

export {refresh_token_service};