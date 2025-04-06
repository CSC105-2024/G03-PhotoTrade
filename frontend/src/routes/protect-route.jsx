import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const  isAuth = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/user/unauth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectRoute;
