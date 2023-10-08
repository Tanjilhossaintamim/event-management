import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropsTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();
  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? (
    children
  ) : (
    <Navigate state={location.pathname} to={"/login"}></Navigate>
  );
};

PrivateRoute.propTypes = {
  children: PropsTypes.node,
};

export default PrivateRoute;
