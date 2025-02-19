import { api_private } from "../../utils/api";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuthStore from "../../Stores/useAuthStore";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const requestIntercept = api_private.interceptors.request.use(
      (req) => {
        req.headers = req.headers || {};
        if (!req.headers["Authorization"]) {
          req.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return req;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = api_private.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return api_private(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api_private.interceptors.request.eject(requestIntercept);
      api_private.interceptors.response.eject(responseIntercept);
    };
  }, [refresh]);

  return api_private;
};

export default useAxiosPrivate;
