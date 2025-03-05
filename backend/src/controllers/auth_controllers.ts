import { user_login_service } from "../services/user_login_service";
import { Request, Response } from 'express';
import {refresh_token_service} from "../services/refresh_token_service"
import { user_logout_service } from "../services/user_logout_service";
const user_login_controller=async (req:Request,res:Response):Promise<any>=>{
    const {email,mobile,password}=req.body;
try{
    const response = await user_login_service(mobile, email, password);
    return res.status(response.statuscode).json(response.data);
}catch(err){
    return res.status(500).json({
        status: false,
        message: 'Internal Server Error, please try again later.',
      });
}
}
export {user_login_controller}

const refresh_token_controller=async (req:Request,res:Response):Promise<any>=>{
    const {refresh_token}=req.body;
try{
    const response = await refresh_token_service(refresh_token);
    return res.status(response.statuscode).json(response.data);
}catch(err){
    return res.status(500).json({
        status: false,
        message: 'Internal Server Error, please try again later.',
      });
}
}
export {refresh_token_controller}
const user_logout_controller=async (req:Request,res:Response):Promise<any>=>{
    const {refresh_token}=req.body;
try{
    const response = await user_logout_service(refresh_token);
    return res.status(response.statuscode).json(response.data);
}catch(err){
    return res.status(500).json({
        status: false,
        message: 'Internal Server Error, please try again later.',
      });
}
}
export {user_logout_controller}
