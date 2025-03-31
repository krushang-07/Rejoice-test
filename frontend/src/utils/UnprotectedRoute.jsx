import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UnprotectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  // console.log(isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default UnprotectedRoute;
