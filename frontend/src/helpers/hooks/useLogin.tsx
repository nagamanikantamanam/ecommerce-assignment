import { useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "../../Stores/useAuthStore";
import { api_public } from "../../utils/api";
import useMenuStore from "../../Stores/MenuStore"

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  username: string;
  role:string;
  email:string;
  mobile:string;
}

const useLogin = (): ((
  username: string,
  password: string
) => Promise<void>) => {
  const navigate = useNavigate();
  const location = useLocation();
  const setAuth = useAuthStore((state) => state.setAuth);
 
  const setLoginClose = useMenuStore((state) => state.setLoginClose);
  const from = location.state?.from?.pathname || "/";
console.log("login hook")
  const login = async (username: string, password: string): Promise<void> => {
    console.log("calleld login")
    try {
      
      const response = await api_public.post<LoginResponse>(
        "auth/login",
        {mobile:isNaN(username as any)?"":username, email:isNaN(username as any)?username:"", password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { refreshToken,accessToken,role ,email,mobile} = response.data;
      console.log('acess',accessToken);
      console.log('role',role);
      console.log('refresh',refreshToken);
      await setAuth(username,accessToken, refreshToken, role,email,mobile);
      
      console.log("user login successs")
      setLoginClose();
      if (role == "1") {
        navigate(from, { replace: true });
      } else {
        navigate("/admin");
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log("failed")
        console.log(err.message);
      }
    }
  };
  return login;
};

export default useLogin;
