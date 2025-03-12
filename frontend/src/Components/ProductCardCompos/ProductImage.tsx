import { Container } from "@mui/material";
import { ProductImageProp } from "../../utils/Types/PropTypes";
import { memo } from "react";
function ProductImage({ image, name }: ProductImageProp) {
  {console.log("image url",image);}
  return (

    <Container>
      <img
        src={image}
        alt={name}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </Container>
  );
}
export default memo(ProductImage);
