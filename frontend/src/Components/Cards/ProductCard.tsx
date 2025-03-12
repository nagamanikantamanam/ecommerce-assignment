import { Box, Paper } from "@mui/material";
import BuyButton from "../Buttons/BuyButton";
import AddCartButton from "../Buttons/AddCartButton";

import ProductImage from "../ProductCardCompos/ProductImage";
import ProductName from "../ProductCardCompos/ProductName";
import ProductPrice from "../ProductCardCompos/ProductPrice";
import ProductRating from "../ProductCardCompos/ProductRating";
import { memo } from "react";
import { ProductCardProp } from "../../utils/Types/PropTypes";
import getImmageUrl from "../../utils/getImageUrl";
function Product({ product, index }: ProductCardProp) {
  return (
    <>
      <Box key={index} sx={{ px: 3, m: 3 }}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            textAlign: "center",
            borderRadius: "10px",
            transition: "0.3s",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <ProductImage
            image={product?.image ? getImmageUrl(product?.image):undefined}
            name={product.title}
          ></ProductImage>
          <ProductName name={product.title}></ProductName>
          <ProductPrice
            price={product.price}
            discount={product.discount}
          ></ProductPrice>
          <ProductRating rating={Number(product.average_rating)}></ProductRating>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 1,
            }}
          >
            <BuyButton id={product.product_id}></BuyButton>
            <AddCartButton
              id={product.product_id}
              title={product.title}
              price={product.price}
              image={product.image}
            ></AddCartButton>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
export default memo(Product);
