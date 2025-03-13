import { useState, useEffect } from 'react';
import useAxiosPrivate from '../../helpers/hooks/useAxiosPrivate';

type Order = {
  order_id: number;
  title: string;
  status_code: string;
};

const orderStatusCodes = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

const useOrders = () => {
  const [orders, setOrders] = useState<Order[] | undefined>(undefined);
  const api_private = useAxiosPrivate();

  
  const getOrders = async () => {
    try {
      const res = await api_private.get<{ status: boolean, orders: Order[] }>('orders/allorders');
      setOrders(res.data.orders);
      console.log("Orders fetched");
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  
  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      await api_private.put('orders/updateorderstatus/', {
        order_id: orderId,
        new_status_code: orderStatusCodes.indexOf(newStatus),
      });
      
      setOrders((prevOrders) =>
        prevOrders?.map((order) =>
          order.order_id === orderId
            ? { ...order, status_code: String(orderStatusCodes.indexOf(newStatus)) }
            : order
        )
      );
    } catch (err) {
      console.error("Error updating order status:", err);
    }
  };

  return {
    orders,
    handleStatusChange,
  };
};

export default useOrders;
