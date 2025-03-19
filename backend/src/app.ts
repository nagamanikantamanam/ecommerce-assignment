import express from 'express';
import path from 'path';
import { user_router } from './routes/user_routes';
import { auth_router } from './routes/auth_routes';
import { product_router } from './routes/product_routes';
import { orders_router } from './routes/order_routes';
import handleerror from './middlewares/handleerror';
import cors from 'cors';

export const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
 }));
app.use('/auth',auth_router)
app.use('/product',product_router)
app.use('/user',user_router)
app.use('/orders',orders_router)
const uploadsPath = path.join(__dirname, 'uploads');
app.use('/images', express.static(uploadsPath));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(handleerror)
