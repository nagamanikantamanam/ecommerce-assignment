import { Button } from "@mui/material";
import { memo } from "react";
import { styled } from '@mui/material/styles';
import useCartStore from "../../Stores/useCartStore";
const StyledAddCartButton=styled(Button)({
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
});
const  AddCartButton=({
  id,
  title,
  price,
  image,
}: {
  id: number;
  title: string;
  price: string;
  image: string;
})=>{
  const  addItem  = useCartStore((state)=>state.addItem);
  return (
    <StyledAddCartButton
      variant="outlined"
      color="secondary"
      size="small"
      onClick={() => {
        addItem({ id, title, price, image });
      }}
    >
      Add to Cart
    </StyledAddCartButton> 
   
  );
}
export default memo(AddCartButton);


