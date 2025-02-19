import { Typography } from "@mui/material";
import usePlaceOrder from "../../helpers/hooks/usePlaceOrder";

function OrderPage() {
  const { PlacingOrder, ErrMsg } = usePlaceOrder();

  return (
    <>
      {PlacingOrder ? (
        <Typography>Placing Order ....</Typography>
      ) : ErrMsg ? (
        <Typography color="error">Error: {ErrMsg}</Typography>
      ) : (
        <Typography>Order Placed</Typography>
      )}
    </>
  );
}

export default OrderPage;
