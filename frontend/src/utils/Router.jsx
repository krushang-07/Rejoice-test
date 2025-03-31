import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import { Suspense, lazy } from "react";
import Loader from "./Loader";
import UnprotectedRoute from "./UnprotectedRoute";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Signup = lazy(() => import("../pages/Signup"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <UnprotectedRoute />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: <UnprotectedRoute />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl">Page Not Found</p>
          <p className="text-gray-600">
            The page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    ),
  },
]);

export default router;
