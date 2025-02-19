import { Typography } from "@mui/material";
import { memo } from "react";
function ProductName({ name }: { name: string }) {
  return (
    <Typography
      variant="subtitle1"
      sx={{ mt: 1, fontWeight: "bold", color: "#333" }}
    >
      {name}
    </Typography>
  );
}
export default memo(ProductName);
