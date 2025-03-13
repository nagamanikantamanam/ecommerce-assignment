import { private_api } from "../../utils/api";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuthStore from "../../Stores/useAuthStore";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const requestIntercept = private_api.interceptors.request.use(
      (req) => {
        req.headers = req.headers || {};
        if (!req.headers["authorization"]) {
          req.headers["authorization"] = `Bearer ${accessToken}`;
        }
        return req;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = private_api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["authorization"] = `Bearer ${newAccessToken}`;
          return private_api(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      private_api.interceptors.request.eject(requestIntercept);
      private_api.interceptors.response.eject(responseIntercept);
    };
  }, [refresh]);

  return private_api;
};

export default useAxiosPrivate;
