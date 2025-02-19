import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMenuStore from "../../Stores/MenuStore";
import useCartStore from "../../Stores/useCartStore";
import CartItemComp from "../Cards/CartItem";

function CartMenu() {
  const cartAnchorEl = useMenuStore((state) => state.cartAnchorEl);
  const handleCartMenuClose = useMenuStore(
    (state) => state.handleCartMenuClose
  );
  const isCartMenuOpen = useMenuStore((state) => state.isCartMenuOpen);

  const cart = useCartStore((state) => state.cart);
  return (
    <Menu
      anchorEl={cartAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isCartMenuOpen}
      onClose={handleCartMenuClose}
    >
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItemComp
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          ></CartItemComp>
        ))
      ) : (
        <MenuItem>No items in cart</MenuItem>
      )}
    </Menu>
  );
}

export default CartMenu;
