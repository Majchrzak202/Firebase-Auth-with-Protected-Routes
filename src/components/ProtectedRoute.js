import React from "react";
import { useAuth } from "../context/UserAuthContextProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const {user} = useAuth()
  
  if (!user) {
    return <    Navigate to="/" />;
  }
  return children
};

export default ProtectedRoute;
