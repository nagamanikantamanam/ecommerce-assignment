import { useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "../../Stores/useAuthStore";
import { api_public } from "../../utils/api";
import useAxiosPrivate from "./useAxiosPrivate";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  username: string;
}

const useLogin = (): ((
  username: string,
  password: string
) => Promise<void>) => {
  const navigate = useNavigate();
  const location = useLocation();
  const setAuth = useAuthStore((state) => state.setAuth);
  const setRole = useAuthStore((state) => state.setRole);
  const api_private = useAxiosPrivate();
  const from = location.state?.from?.pathname || "/";

  const login = async (username: string, password: string): Promise<void> => {
    try {
      const response = await api_public.post<LoginResponse>(
        "auth/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { accessToken, refreshToken } = response.data;

      await setAuth(username, refreshToken, accessToken);
      const response2 = await api_private.get("/auth/me");
      const role = response2.data.role;
      console.log(role);
      setRole(role);
      if (role == "user") {
        navigate(from, { replace: true });
      } else {
        navigate("/admin");
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
  return login;
};

export default useLogin;
