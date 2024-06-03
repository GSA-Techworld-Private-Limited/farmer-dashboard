import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../context/ContextStore";

const ProtectedRoute = () => {
  const { authenticated } = useContext(MyContext);

  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
