import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ChairIcon from "@mui/icons-material/Chair";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";

import { Category } from "../../../utils/Types/CommonTypes";
const categories: Category[] = [
  {
    name: "beauty",
    icon: <FaceRetouchingNaturalIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
  },
  {
    name: "fragrances",
    icon: <FilterVintageIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
  },
  {
    name: "furniture",
    icon: <ChairIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
  },
];
export default categories;
