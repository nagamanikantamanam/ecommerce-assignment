import  { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useAxiosPrivate from "../../helpers/hooks/useAxiosPrivate";
import useAuthStore from "../../Stores/useAuthStore";
import UserProfileForm from './UserProfileForm';
import OrderTable from './OrderTable';

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
  const axios_private = useAxiosPrivate();
  const email = useAuthStore((state) => state.email) || '';
  const mobile = useAuthStore((state) => state.mobile) || '';
  const [userDetails, setUserDetails] = useState<{ email: string; mobile: string }>({ email, mobile });
  const [orders, setOrders] = useState<{ order_id: number; title: string; status_name: string }[]>([]);
  const [isEditable, setIsEditable] = useState(false);

  const getOrders = async () => {
    try {
      const res = await axios_private.get<{ order_id: number; title: string; status_name: string }[]>(
        'orders/getuserorders'
      );
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveClick = async () => {
    try {
      await axios_private.put('user/update', {
        email: userDetails.email,
        mobile: userDetails.mobile,
      });
      setIsEditable(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleCancelOrder = (orderId: number) => {
    try {
      axios_private.put<{ status: boolean; message: string }>(`orders/cancel/${orderId}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order.order_id !== orderId));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <StyledBox>
      <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
        User Profile
      </Typography>

      <UserProfileForm
        email={userDetails.email}
        mobile={userDetails.mobile}
        isEditable={isEditable}
        onEmailChange={(email) => setUserDetails({ ...userDetails, email })}
        onMobileChange={(mobile) => setUserDetails({ ...userDetails, mobile })}
        onSave={handleSaveClick}
        onEdit={handleEditClick}
      />

      <OrderTable orders={orders} onCancelOrder={handleCancelOrder} />
    </StyledBox>
  );
};

export default UserProfilePage;
