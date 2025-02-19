import { Container, Grid, Box, CircularProgress } from "@mui/material";
import ProductImage from "../ProductPageCompos/ProductImage";
import UserActions from "../ProductPageCompos/UserActions";
import ProductDetails from "../ProductPageCompos/ProductDeatils";
import useProduct from "../../helpers/hooks/useProduct";

function Product() {
  const { product, loading } = useProduct();

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={50} />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              position: "sticky",
              top: "10vh",
              height: "80vh",
              overflow: "hidden",
            }}
          >
            <ProductImage
              image={product?.images[0]}
              title={product?.title}
            ></ProductImage>
            {product && <UserActions product={product}></UserActions>}
          </Box>
        </Grid>
        {product && <ProductDetails product={product}></ProductDetails>}
      </Grid>
    </Container>
  );
}

export default Product;
