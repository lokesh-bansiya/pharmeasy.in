import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/adminlogin" />;
  }

  return children;
}

export default PrivateRoute;
