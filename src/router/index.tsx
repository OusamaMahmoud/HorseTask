import { createBrowserRouter, Navigate } from "react-router";
import LoginPage from "../pages/LoginPage";
import HorseDetails from "../pages/Horses/HorseDetails";
import ProtectedRoute from "./ProtectedRoute";
import HorsesList from "../pages/Horses/HorsesList";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/horses"} />,
  },
  {
    path: "horses",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <HorsesList />
          </ProtectedRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <ProtectedRoute>
            <HorseDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
