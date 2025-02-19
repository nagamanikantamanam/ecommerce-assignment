import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ProfileMenuMobile from "./ProfileMenuMobile";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import ProfileMenuOpen from "./ProfileMenuOpen";
import UserActions from "./UserActions";
import UserActionsMobile from "./UserActionsMobile";
import CartMenu from "../Cart/CartMenu";
import LoginIcon from "@mui/icons-material/Login";
import useAuthStore from "../../Stores/useAuthStore";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const location = useLocation();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Logo></Logo>
            <SearchBox></SearchBox>
            <Box sx={{ flexGrow: 1 }} />
            {user ? (
              <>
                <UserActions />
                <UserActionsMobile />
              </>
            ) : (
              <LoginIcon
                onClick={() => {
                  navigate("/login", { state: { from: location } });
                }}
              ></LoginIcon>
            )}
          </Toolbar>
        </AppBar>
        <ProfileMenuOpen />
        <ProfileMenuMobile></ProfileMenuMobile>
        <CartMenu></CartMenu>
      </Box>
      <Box sx={{ mt: 15 }}>
        <Outlet></Outlet>
      </Box>
    </>
  );
}
