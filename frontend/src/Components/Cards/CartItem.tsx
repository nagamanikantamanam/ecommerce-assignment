import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BuyButton from "../Buttons/BuyButton";
import { CartItem } from "../../utils/Types/CommonTypes";
import { memo } from "react";
import RemoveFromCart from "../Buttons/RemoveFromCart";
function CartItemComp({ id, image, price, title }: CartItem) {
  return (
    <MenuItem key={id}>
      <Box display="flex" alignItems="center" gap={2} sx={{ m: 1 }}>
        <img src={image} alt={title} width={50} height={50} />
        <Box>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2" color="textSecondary" sx={{ m: 1 }}>
            {price}
          </Typography>
          <BuyButton id={id}></BuyButton>
          <RemoveFromCart id={id}></RemoveFromCart>
        </Box>
      </Box>
    </MenuItem>
  );
}
export default memo(CartItemComp);
