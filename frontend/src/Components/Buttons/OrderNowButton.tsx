import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/system';

// Styled Component for Order Now Button
const StyledOrderNowButton = styled(Button)({
  width: "100%",
  backgroundColor: "secondary.main",
  "&:hover": { backgroundColor: "secondary.dark" },
});

const OrderNowButton = ({ product_id }: { product_id: number }) => {
  const navigate = useNavigate();
  return (
    <StyledOrderNowButton
      variant="contained"
      onClick={() => {
        navigate(`/ordernow/${product_id}`);
      }}
    >
      Order Now
    </StyledOrderNowButton>
  );
};

export default OrderNowButton;
