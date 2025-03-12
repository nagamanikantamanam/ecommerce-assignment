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
import {   Outlet } from "react-router-dom";
import LoginPage from "../Pages/LoginPage"

import useMenuStore from "../../Stores/MenuStore";
export default function Header() {

  const user = useAuthStore((state) => state.user);
  const setLoginOpen=useMenuStore((state)=>state.setLoginOpen);
 

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
                 console.log("login clicked")
                 setLoginOpen()
                }}
              ></LoginIcon>
            )}
          </Toolbar>
        </AppBar>
        <ProfileMenuOpen />
        <ProfileMenuMobile></ProfileMenuMobile>
        <CartMenu></CartMenu>
       <LoginPage></LoginPage>
      </Box>
      <Box sx={{ mt: 15 }}>
        <Outlet></Outlet>
      </Box>
    </>
  );
}
