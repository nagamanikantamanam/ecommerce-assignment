import { Typography } from "@mui/material";
type productprice = { price: number; discount: number };
import { memo } from "react";
function ProductPrice({ price, discount }: productprice) {
  return (
    <Typography variant="body2" sx={{ color: "#777", mb: 1 }}>
      ${price} ({discount}% Off)
    </Typography>
  );
}
export default memo(ProductPrice);
