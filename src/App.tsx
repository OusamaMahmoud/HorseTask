import { AnimatePresence, motion } from "framer-motion";
import HorseList from "./pages/Horses/HorsesList";
import HorseDetails from "./pages/Horses/HorseDetails";
import { useLocation, Routes, Route } from "react-router";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route
          path="/horses"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <HorseList />
            </motion.div>
          }
        />
        <Route
          path="/horses/:id"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <HorseDetails />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
