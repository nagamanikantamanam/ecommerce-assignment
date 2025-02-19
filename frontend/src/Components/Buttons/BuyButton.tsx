import { Button } from "@mui/material";
import useMenuStore from "../../Stores/MenuStore";
import { useNavigate } from "react-router-dom";
import { BuyButtonPropType } from "../../utils/Types/PropTypes";
import { memo } from "react";
function BuyButton({ id }: BuyButtonPropType) {
  const navigate = useNavigate();
  const { handleCartMenuClose, isCartMenuOpen } = useMenuStore();
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      sx={{
        backgroundColor: "#1E88E5",
        padding: "8px 20px",
        borderRadius: "20px",
        fontWeight: "bold",
        transition: "0.3s",
        "&:hover": {
          backgroundColor: "#1565C0",
          transform: "scale(1.05)",
        },
      }}
      onClick={() => {
        if (isCartMenuOpen) {
          handleCartMenuClose();
        }
        navigate(`/product-details/${id}`);
      }}
    >
      Buy Now
    </Button>
  );
}
export default memo(BuyButton);
