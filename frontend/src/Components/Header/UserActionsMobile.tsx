import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import useMenuStore from "../../Stores/MenuStore";
function UserActionsMobile() {
  const handleMobileMenuOpen = useMenuStore(
    (state) => state.handleMobileMenuOpen
  );
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="show more"
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
    </Box>
  );
}

export default UserActionsMobile;
