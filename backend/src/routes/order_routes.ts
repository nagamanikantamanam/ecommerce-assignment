import express from "express";
import {  cancel_order, create_order, get_all_orders, get_user_orders, update_order_status} from "../controllers/order_controllers";
import { verifyauth } from "../middlewares/verifyauth";
import { verfyrole } from "../middlewares/verifyrole";
const orders_router=express.Router();

orders_router.post('/create',verifyauth,verfyrole("1"),create_order);
orders_router.get('/getuserorders',verifyauth,verfyrole("1"),get_user_orders);
orders_router.put('/cancel/:order_id',verifyauth,verfyrole("1"),cancel_order);
orders_router.get('/allorders',verifyauth,verfyrole("2"),get_all_orders);
orders_router.put('/updateorderstatus',verifyauth,verfyrole("2"),update_order_status);
export {orders_router}
