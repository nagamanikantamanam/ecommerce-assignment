import useAuthStore from "../Stores/useAuthStore";
import { useLocation, Navigate, Outlet } from "react-router-dom";

function RequireAuth({ allow }: { allow: string }) {
  const user = useAuthStore((state) => state.user);
  const role = useAuthStore((state) => state.role);
  const location = useLocation();

  return (
    <>
      {user ? (
        role == allow ? (
          <Outlet></Outlet>
        ) : (
          <>unauthorized access </>
        )
      ) : (
        <Navigate to="/login" state={{ from: location }}></Navigate>
      )}
    </>
  );
}
export default RequireAuth;
