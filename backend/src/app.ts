import express from 'express';
export const app = express();
import { user_router } from './routes/user_routes';
import {get_user} from './repo/get_user';
import { auth_router } from './routes/auth_routes';
import { product_router } from './routes/product_routes';
import { orders_router } from './routes/order_routes';
const port = 3000;
app.use(express.json());
app.use('/auth',auth_router)
app.use('/product',product_router)
app.use('/user',user_router)
app.use('/orders',orders_router)
app.get('/', (req, res) => {
  res.send('Hello World!');
});
