import { Typography, Box } from "@mui/material";
import { ProductReviewType } from "../../utils/Types/CommonTypes";
import { memo } from "react";

const ProductReviews = ({ product }: ProductReviewType) => {
  console.log(product);
  if (!product) {
    return <Typography>Reviews not present</Typography>;
  }

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6">Customer Reviews</Typography>
      {product?.reviews && product.reviews.length > 0 ? (
        product.reviews.map((review, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "grey.100",
              padding: 2,
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              marginTop: 2,
            }}
          >
            
            <Typography
              sx={{
                fontSize: "1rem",
                fontStyle: "italic",
                color: "text.primary",
              }}
            >
              {review.review}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: "bold",
                color: "text.secondary",
              }}
            >
              - {review.name}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography>No reviews available</Typography>
      )}
    </Box>
  );
};

export default memo(ProductReviews);
