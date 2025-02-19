import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMenuStore from "../../Stores/MenuStore";
import useAuthStore from "../../Stores/useAuthStore";
function ProfileMenuOpen() {
  const anchorEl = useMenuStore((state) => state.anchorEl);
  const handleMenuClose = useMenuStore((state) => state.handleMenuClose);
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);

  const logout = useAuthStore((state) => state.logout);
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={"1"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          logout();
        }}
      >
        Log Out
      </MenuItem>
    </Menu>
  );
}
export default ProfileMenuOpen;
