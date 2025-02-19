import { Rating } from "@mui/material";
type productrating = { rating: number };
import { memo } from "react";
function ProductRating({ rating }: productrating) {
  return <Rating value={rating} precision={0.1} readOnly sx={{ mt: 1 }} />;
}
export default memo(ProductRating);
