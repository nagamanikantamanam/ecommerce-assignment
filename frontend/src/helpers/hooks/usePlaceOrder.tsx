import { useEffect, useState } from "react";
import { api_private } from "../../utils/api";
function usePlaceOrder() {
  const [PlacingOrder, setPlacingOrder] = useState<boolean>(true);
  const [ErrMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    const placeOrder = async () => {
      try {
        let response = await api_private.post<{
          status: number;
          message: string;
        }>("/http/200");
        if (response.status == 200) {
          setPlacingOrder(false);
        } else {
          throw new Error("");
        }
      } catch (err) {
        if (err instanceof Error) {
          setErrMsg(err.message);
          setPlacingOrder(false);
        }
      }
    };

    const timeoutId = setTimeout(() => {
      placeOrder();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return { PlacingOrder, ErrMsg };
}
export default usePlaceOrder;
