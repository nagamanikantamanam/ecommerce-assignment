import {  Paper, Typography } from "@mui/material";
import ProductReviews from "./ProductReviews";
import { ProductDetailsProp } from "../../utils/Types/PropTypes";
import { memo } from "react";

const ProductDetails = ({ product }: ProductDetailsProp) => {
  return (
    <Paper
      sx={{
        padding: 3,
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {product?.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginTop: 2,
          lineHeight: "1.6",
          fontSize: "1rem",
          color: "text.secondary",
        }}
      >
        {product?.description}
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontSize: "1.5rem", color: "primary.main", marginTop: 1 }}
      >
        ${Number(product?.price).toFixed(2)}
      </Typography>

      <ProductReviews product={product} />
    </Paper>
  );
};

export default memo(ProductDetails);
