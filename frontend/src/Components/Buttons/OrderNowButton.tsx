import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function OrderNowButton() {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      sx={{
        width: "100%",
        backgroundColor: "secondary.main",
        "&:hover": { backgroundColor: "secondary.dark" },
      }}
      onClick={() => {
        navigate("/ordernow");
      }}
    >
      Order Now
    </Button>
  );
}
export default OrderNowButton;
