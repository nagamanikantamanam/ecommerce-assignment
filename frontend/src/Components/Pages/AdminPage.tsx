import { styled } from '@mui/system';
import { Box, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useOrders from '../../helpers/hooks/useOrders';

const StyledBox = styled(Box)({
  padding: 20,
  maxWidth: 800,
  margin: 'auto',
  backgroundColor: '#f4f6f8',
  borderRadius: 8,
});

const AdminPage = () => {
  const { orders, handleStatusChange } = useOrders();
  const orderStatusCodes = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

  return (
    <StyledBox>
      <h2>Admin Panel - Order Management</h2>
      {orders ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Product Title</TableCell>
                <TableCell>Update Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.order_id}>
                  <TableCell>{order.order_id}</TableCell>
                  <TableCell>{order.title}</TableCell>
                  <TableCell>
                    <FormControl fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={orderStatusCodes[Number(order.status_code)]}
                        onChange={(e) => handleStatusChange(order.order_id, e.target.value)}
                      >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Processing">Processing</MenuItem>
                        <MenuItem value="Shipped">Shipped</MenuItem>
                        <MenuItem value="Delivered">Delivered</MenuItem>
                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>Loading...</>
      )}
    </StyledBox>
  );
};

export default AdminPage;
