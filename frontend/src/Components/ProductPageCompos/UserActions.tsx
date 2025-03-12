import { Grid, Box } from "@mui/material";
import AddCartButton from "../Buttons/AddCartButton";
import OrderNowButton from "../Buttons/OrderNowButton";
import { ProductType } from "../../utils/Types/CommonTypes";
import { memo } from "react";
function UserActions({ product }: { product: ProductType }) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        padding: 2,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <AddCartButton
            id={product.product_id}
            price={product.price}
            image={product.image}
            title={product.title}
          ></AddCartButton>
        </Grid>
        <Grid item xs={6}>
          <OrderNowButton product_id={Number(product.product_id)}></OrderNowButton>
        </Grid>
      </Grid>
    </Box>
  );
}
export default memo(UserActions);
