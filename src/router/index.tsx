import { createBrowserRouter, Navigate } from "react-router";
import LoginPage from "../pages/LoginPage";
import HorseDetails from "../pages/Horses/HorseDetails";
import ProtectedRoute from "./ProtectedRoute";
import HorsesList from "../pages/Horses/HorsesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/horses" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/horses",
    element: (
      <ProtectedRoute>
        <HorsesList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/horses/:id",
    element: (
      <ProtectedRoute>
        <HorseDetails />
      </ProtectedRoute>
    ),
  },
]);

export default router;
