import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import SearchIcon from "@mui/icons-material/Search";
import StyledInputBase from "./StyledInputBase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBox() {
  const navigate = useNavigate();
  const [TempQuery, setTempQuery] = useState("");

  const handleClick = () => {
    navigate(`products/?searchquery=${TempQuery}&category=&minp=10&maxp=10000000&minrat=0`);
  };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          setTempQuery(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
      />
    </Search>
  );
}
export default SearchBox;
