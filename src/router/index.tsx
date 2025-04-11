import { createBrowserRouter, Navigate } from "react-router";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import HorsesList from "../pages/Horses/HorsesList";
import Layout from "../layouts/Layout";
import React, { Suspense } from "react";
import Skeleton from "../components/common/Skeleton";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

// Lazy load the HorseDetails component
const HorseDetails = React.lazy(() => import("../pages/Horses/HorseDetails"));

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
            <motion.div
              key="horse-details" // Key is necessary for animations
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} // Adjust the duration as needed
            >
              <HorsesList />
            </motion.div>
          </ProtectedRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Skeleton />}>
              <AnimatePresence mode="wait">
                <motion.div
                  key="horse-details" // Key is necessary for animations
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }} // Adjust the duration as needed
                >
                  <HorseDetails />
                </motion.div>
              </AnimatePresence>
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <motion.div
        key="horse-details" // Key is necessary for animations
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }} // Adjust the duration as needed
      >
        <LoginPage />
      </motion.div>
    ),
  },
]);

export default router;
