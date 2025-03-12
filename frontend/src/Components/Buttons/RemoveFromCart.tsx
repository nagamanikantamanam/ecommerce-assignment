import { Button } from "@mui/material";
import useCartStore from "../../Stores/useCartStore";
import { CartState } from "../../utils/Types/StoresTypes";
import { styled } from '@mui/system';
const StyledRemoveFromCart=styled(Button)({color: "red"})
const RemoveFromCart=({ id }: { id: number })=> {
  const removeCartItem = useCartStore((state: CartState) => state.removeItem);
  return (
    <>
      <StyledRemoveFromCart
        onClick={() => {
          removeCartItem(id);
        }}
      >
        Remove
      </StyledRemoveFromCart>
    </>
  );
}
export default RemoveFromCart;
