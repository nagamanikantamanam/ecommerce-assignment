import { useEffect, useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import { useParams } from 'react-router-dom'
function usePlaceOrder() {
  const [PlacingOrder, setPlacingOrder] = useState<boolean>(true);
  const [ErrMsg, setErrMsg] = useState<string>("");
  const api_private=useAxiosPrivate();
  const { product_id } = useParams();
  useEffect(() => {
    const placeOrder = async () => {
      try {
        let response = await api_private.post<{
          status: number;
          message: string;
        }>("orders/create",{
          "product_id":product_id
        });
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
