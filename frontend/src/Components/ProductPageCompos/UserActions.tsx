import {  Box } from "@mui/material";
import AddCartButton from "../Buttons/AddCartButton";
import OrderNowButton from "../Buttons/OrderNowButton";
import { ProductType } from "../../utils/Types/CommonTypes";
import { memo } from "react";
import Grid from '@mui/material/Grid2';

const UserActions = ({ product }: { product: ProductType }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        padding: 2,
      }}
    >
  <Grid container spacing={2} justifyContent="center">
  <Grid  size={6}>
    <AddCartButton
      id={product.product_id}
      price={product.price}
      image={product.image}
      title={product.title}
      
    ></AddCartButton>
  </Grid>
  <Grid  size={6}>
    <OrderNowButton product_id={Number(product.product_id)}></OrderNowButton>
  </Grid>
</Grid>

    </Box>
  );
};

export default memo(UserActions);


