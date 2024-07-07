import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [authenticated, setAuthenticated] = useState(true);

  const checkAuthentication = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (accessToken && email && password) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(checkAuthentication, 100);

    return () => clearInterval(interval);
  }, []);

  if (authenticated) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
