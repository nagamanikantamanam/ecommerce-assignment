import { Button } from "@mui/material";
import useCartStore from "../../Stores/useCartStore";
import { CartState } from "../../utils/Types/StoresTypes";
function RemoveFromCart({ id }: { id: number }) {
  const removeCartItem = useCartStore((state: CartState) => state.removeItem);
  return (
    <>
      <Button
        sx={{ color: "red" }}
        onClick={() => {
          removeCartItem(id);
        }}
      >
        Remove
      </Button>
    </>
  );
}
export default RemoveFromCart;
