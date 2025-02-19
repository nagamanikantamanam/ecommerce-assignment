import { ProductImageType } from "../../utils/Types/CommonTypes";
import { memo } from "react";
function ProductImage({ image, title }: ProductImageType) {
  return (
    <img
      src={image}
      alt={title}
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
    />
  );
}
export default memo(ProductImage);
