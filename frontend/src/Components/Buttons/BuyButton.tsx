import { Button } from "@mui/material";
import useMenuStore from "../../Stores/MenuStore";
import { useNavigate } from "react-router-dom";
import { BuyButtonPropType } from "../../utils/Types/PropTypes";
import { memo } from "react";
import { styled } from '@mui/system';
const StyledBuyButton=styled(Button)({
  backgroundColor: "#1E88E5",
  padding: "8px 20px",
  borderRadius: "20px",
  fontWeight: "bold",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#1565C0",
    transform: "scale(1.05)"}
})
const BuyButton=({ id }: BuyButtonPropType) =>{
  
  const navigate = useNavigate();
  const { handleCartMenuClose, isCartMenuOpen } = useMenuStore();
  return (
    <StyledBuyButton
      variant="contained"
      color="primary"
      size="small"
      onClick={() => {
        if (isCartMenuOpen) {
          handleCartMenuClose();
        }
     
        navigate(`/product-details/${id}`);
      }}
    >
      Buy Now
    </StyledBuyButton>
  );
}
export default memo(BuyButton);
