import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useMenuStore from "../../Stores/MenuStore";
import useCartStore from "../../Stores/useCartStore";
function UserActions() {
  const handleProfileMenuOpen = useMenuStore(
    (state) => state.handleProfileMenuOpen
  );
  const handleCartMenuOpen = useMenuStore((state) => state.handleCartMenuOpen);
  const cart = useCartStore((state) => state.cart);
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        onClick={handleCartMenuOpen}
      >
        <Badge badgeContent={cart.length} color="error">
          <ShoppingCartIcon></ShoppingCartIcon>
        </Badge>
      </IconButton>

      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </Box>
  );
}
export default UserActions;
