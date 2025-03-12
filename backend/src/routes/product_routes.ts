import express from "express";
import { add_product, update_stock ,delete_product,get_all_products,get_product, add_review} from "../controllers/product_controllers";
import { handleimage } from "../middlewares/handleimage";
import { verifyauth } from "../middlewares/verifyauth";
import { verfyrole } from "../middlewares/verifyrole";

const product_router=express.Router();
product_router.post('/add',handleimage,add_product);
product_router.put('/updatestock',verifyauth,verfyrole("2"),update_stock);
product_router.delete('/delete-product/:productid', verifyauth,verfyrole("2"),delete_product);
product_router.get('/get-all-products', get_all_products);

product_router.get('/add_review', verifyauth,verfyrole("1"),add_review);




product_router.get('/:product_id', get_product);
/* dont add routes below */
export{product_router}