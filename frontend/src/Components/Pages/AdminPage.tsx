import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { styled } from '@mui/material/styles';


const StyledBox = styled('div')({
  padding: 20,
  maxWidth: 800,
  margin: 'auto',
  backgroundColor: '#f4f6f8',
  borderRadius: 8,
});
import useAxiosPrivate from '../../helpers/hooks/useAxiosPrivate'
type order={order_id:number,title:string,status_code:string};

const AdminPage = () => {
  
  const [orders, setOrders] = useState<order[]>();
  const api_private=useAxiosPrivate();
  const orderStatusCodes = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];
  
  const getOrders=async ()=>{
   const res=await api_private.get<{status:boolean,orders:order[]}>('orders/allorders');
   setOrders(res.data.orders);
   console.log("ghhhhjklfdssd")
  }
  useEffect( ()=>{
 getOrders();
  },[])
 
  const handleStatusChange = async (orderId:number, newStatus:string) => {
    console.log("chabged");
  console.log(orders);
  try{
  api_private.put(`orders/updateorderstatus/`,{
    order_id:orderId,
    new_status_code:orderStatusCodes.indexOf(newStatus)
  })
    setOrders((prevOrders) =>
      prevOrders?.map((order) =>
        order.order_id=== orderId? { ...order, status_code: String(orderStatusCodes.indexOf(newStatus)) } : order
      )
    );}catch(err){
      console.log(err);
    }

  };
  


  return (
    <StyledBox>
      <h2>Admin Panel - Order Management</h2>
      
      {orders?
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
        {  orders.map((order) => (
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
      </TableContainer>:<>Loading...</>}
     
      
    
    </StyledBox>
  );
};

export default AdminPage;
