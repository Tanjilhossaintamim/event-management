import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropsTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContex);

  return !user ? (
    children
  ) : (
    <Navigate state={location.pathname} to={"/"}></Navigate>
  );
};

PublicRoute.propTypes = {
  children: PropsTypes.node,
};

export default PublicRoute;
