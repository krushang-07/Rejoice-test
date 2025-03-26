import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

const getAccessToken = () => {
  return localStorage.getItem("auth-token");
};

const isAuthenticated = () => {
  return !!getAccessToken();
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    index: true,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default router;
