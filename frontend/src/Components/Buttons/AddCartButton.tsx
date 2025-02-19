import { Button } from "@mui/material";
import { memo } from "react";

import useCartStore from "../../Stores/useCartStore";
function AddCartButton({
  id,
  title,
  price,
  image,
}: {
  id: number;
  title: string;
  price: number;
  image: string;
}) {
  const { addItem } = useCartStore();
  return (
    <Button
      variant="outlined"
      color="secondary"
      size="small"
      sx={{
        borderColor: "#FF4081",
        color: "#FF4081",
        padding: "8px 20px",
        borderRadius: "20px",
        fontWeight: "bold",
        transition: "0.3s",
        "&:hover": {
          borderColor: "#D81B60",
          color: "#D81B60",
          transform: "scale(1.05)",
        },
      }}
      onClick={() => {
        addItem({ id, title, price, image });
      }}
    >
      Add to Cart
    </Button>
  );
}
export default memo(AddCartButton);
