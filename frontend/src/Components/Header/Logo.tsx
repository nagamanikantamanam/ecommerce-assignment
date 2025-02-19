import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
function Logo() {
  const navigate = useNavigate();
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: "none", sm: "block" } }}
      onClick={() => {
        navigate("/");
      }}
    >
      Ecommerce
    </Typography>
  );
}
export default Logo;
