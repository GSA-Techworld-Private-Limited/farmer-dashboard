import { useContext } from "react";
import MyContext from "../context/ContextStore";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
const ProtectedRoute = ({ element }) => {
  const { authenticated, loading } = useContext(MyContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center fixed inset-0 font-poppins">
        <p>Loading...</p>
      </div>
    );
  }
  const token = sessionStorage.getItem("token");
  return authenticated && token ? element : <Navigate to="/" />;
};
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
export default ProtectedRoute;
