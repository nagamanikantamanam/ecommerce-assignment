import express from "express";
import { add_user, update_user } from "../controllers/user_controllers";
import { verifyauth } from "../middlewares/verifyauth";
const user_router=express.Router();

user_router.post('/adduser',add_user);
user_router.put('/update',verifyauth,update_user);
export {user_router}
