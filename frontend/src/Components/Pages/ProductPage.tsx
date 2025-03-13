import { Container, Box, CircularProgress } from "@mui/material";
import ProductImage from "../ProductPageCompos/ProductImage";
import UserActions from "../ProductPageCompos/UserActions";
import ProductDetails from "../ProductPageCompos/ProductDeatils";
import useProduct from "../../helpers/hooks/useProduct";
import getImageUrl from "../../utils/getImageUrl";
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid2';
const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const Product = () => {
  const { product, loading } = useProduct();

  if (loading) {
    return (
      <StyledBox>
        <CircularProgress size={50} />
      </StyledBox>
    );
  }
else{
  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs:12, sm:6, md:4}}>
          <Box
            sx={{
              position: "sticky",
              top: "10vh",
              height: "80vh",
              overflow: "hidden",
            }}
          >
            <ProductImage
              image={product?.image ? getImageUrl(product?.image) : undefined}
              title={product?.title}
            />
            {product && <UserActions product={product} />}
          </Box>
        </Grid>

        <Grid size={{xs:12, sm:6, md:8}}>
        {product ? (
  <ProductDetails product={product} />
) : (
  <Box sx={{ textAlign: 'center' }}>Loading or No Product Found</Box>
)}

        </Grid>
      </Grid>
    </Container>
  );}
};

export default Product;
