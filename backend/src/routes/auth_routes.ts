import express from "express";
import {  user_login_controller, user_logout_controller} from "../controllers/auth_controllers";
import { refresh_token_controller } from "../controllers/auth_controllers";
import { verifyauth } from "../middlewares/verifyauth";
import { verfyrole } from "../middlewares/verifyrole";
import { handleimage } from "../middlewares/handleimage";
const auth_router=express.Router();

auth_router.post('/login',user_login_controller);
auth_router.post('/refresh',refresh_token_controller);
auth_router.post('/logout',user_logout_controller);
auth_router.get('/test',handleimage,(req,res)=>{
    console.log("auth testing")
    res.status(200)
})
export {auth_router}