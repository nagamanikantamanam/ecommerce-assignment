import { api_private } from "../../utils/api";
import useAuthStore from "../../Stores/useAuthStore";
const useRefreshToken = (): (() => Promise<string>) => {
  const { setAcessToken, refreshToken } = useAuthStore();
  //const api_private = useAxiosPrivate();
  const refresh = async (): Promise<string> => {
    const response = await api_private.post<{ accessToken: string }>(
      "/auth/refresh",
      {
        refreshToken: refreshToken,
      }
    );

    const accessToken = response.data.accessToken;
    setAcessToken(accessToken);

    console.log("refresh token updated");

    return accessToken;
  };

  return refresh;
};

export default useRefreshToken;
