import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Order {
  order_id: number;
  title: string;
  status_name: string;
}

interface OrderTableProps {
  orders: Order[];
  onCancelOrder: (orderId: number) => void;
}

const OrderTable = ({ orders, onCancelOrder }:OrderTableProps) => {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Product Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.order_id}>
              <TableCell>{order.order_id}</TableCell>
              <TableCell>{order.title}</TableCell>
              <TableCell>{order.status_name}</TableCell>
              <TableCell>
                {order.status_name === 'Cancelled' ? null : order.status_name === 'Delivered' ? (
                  <Button variant="outlined" color="error" onClick={() => navigate(`/review/${order.order_id}`)}>
                    Review
                  </Button>
                ) : (
                  <Button variant="outlined" color="error" onClick={() => onCancelOrder(order.order_id)}>
                    Cancel
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
