import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/user/unauth/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectRoute;
