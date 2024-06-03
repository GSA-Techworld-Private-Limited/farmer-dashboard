import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Abc from "./components/Abc";
import ABd from "./components/ABd";
import ProtectedRoute from "./components/routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  { 
    element: <ProtectedRoute />,
    children: [
      {
        path: "dashboard",
        element: <Abc />,
      },
      {
        path: "ab",
        element: <ABd />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default router;
