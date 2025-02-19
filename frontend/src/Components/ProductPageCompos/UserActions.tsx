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
            id={product.id}
            price={product.price}
            image={product.images[0]}
            title={product.title}
          ></AddCartButton>
        </Grid>
        <Grid item xs={6}>
          <OrderNowButton></OrderNowButton>
        </Grid>
      </Grid>
    </Box>
  );
}
export default memo(UserActions);
