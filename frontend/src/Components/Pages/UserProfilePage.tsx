import  { useEffect, useState } from "react";
import { TextField, Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import useAxiosPrivate from "../../helpers/hooks/useAxiosPrivate";
import { api_private } from "../../utils/api";
import useAuthStore from "../../Stores/useAuthStore";
import { useNavigate } from "react-router-dom";
const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  maxWidth: 600,
  margin: 'auto',
  backgroundColor: '#f4f6f8',
  borderRadius: 8,
});

const UserProfilePage = () => {
  const axios_private=useAxiosPrivate();

  const email=useAuthStore((state)=>state.email)||'';
  const mobile=useAuthStore((state)=>state.mobile)||'';
  const [userDetails, setUserDetails] = useState<{email:string,mobile:string}>({email,mobile});
  const [orders, setOrders] = useState<{order_id:number,title:string,status_name:string}[]>();
  const getOrders=async ()=>{
     const res= await  axios_private.get<{order_id:number,title:string,status_name:string}[]>('orders/getuserorders')
     setOrders(res.data)
  }

  const [isEditable, setIsEditable] = useState(false);

  
  const navigate=useNavigate();
const handleSaveClick=async ()=>{
  try{
  const res=api_private.put('user/update',{
    email:userDetails.email,
    mobile:userDetails.mobile
  })
  setIsEditable(false);
}catch(err){
  console.log(err);
}

}
 
  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleCancelOrder = (orderId:number) => {
    try{
  api_private.put<{status:boolean,message:string}>(`orders/cancel/${orderId}`)
    setOrders(orders&&orders.filter(order => order.order_id != orderId));
    }catch(err){
      console.log(err);
    }
  };
  useEffect(()=>{
    getOrders();
  },[])

  return (
    <StyledBox>
      <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
        User Profile
      </Typography>

     

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userDetails.email}
        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
        disabled={!isEditable}
      />

      <TextField
        label="Mobile"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userDetails.mobile}
        onChange={(e) => setUserDetails({ ...userDetails, mobile: e.target.value })}
        disabled={!isEditable}
      />

      { !isEditable?
      <Button
        variant="contained"
        color={  "secondary"}
        onClick={handleEditClick}
        sx={{ mt: 2 }}
      >Edit</Button>:<Button
      variant="contained"
      color={ "primary"}
      onClick={handleSaveClick}
      sx={{ mt: 2 }}
    >Save</Button>}
        
      

      
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

            {orders && orders.map((order) => (
              <TableRow key={order.order_id}>
                <TableCell>{order.order_id}</TableCell>
                <TableCell>{order.title}</TableCell>
                <TableCell>{order.status_name}</TableCell>
                <TableCell>
                {order.status_name == "Cancelled" ? (
  <></>
) : order.status_name === "Delivered" ? (
  <Button
    variant="outlined"
    color="error"
    onClick={() => navigate(`/review/${order.order_id}`)}
  >
    Review
  </Button>
) : <Button
variant="outlined"
color="error"
onClick={() => handleCancelOrder(order.order_id)}
>
Cancel
</Button>}

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBox>
  );
};

export default UserProfilePage;
