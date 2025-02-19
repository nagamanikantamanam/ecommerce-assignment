import PriceRange from "./PriceRange";
import MinRating from "./MinRating";
import MinimumDiscount from "./MinimumDiscount";
import { Typography } from "@mui/material";
function Filters() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{ mb: 3, fontWeight: "bold", color: "#333" }}
      >
        Filters
      </Typography>
      <PriceRange></PriceRange>
      <MinRating></MinRating>
      <MinimumDiscount></MinimumDiscount>
    </>
  );
}
export default Filters;
