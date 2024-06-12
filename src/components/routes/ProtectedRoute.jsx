import { useContext } from "react";
import MyContext from "../context/ContextStore";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
const ProtectedRoute = ({ element }) => {
  const { authenticated, loading } = useContext(MyContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  return authenticated ? element : <Navigate to="/" />;
};
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
export default ProtectedRoute;
