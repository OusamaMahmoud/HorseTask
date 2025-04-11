import { Route, Routes } from "react-router";
import HorseList from "./pages/Horses/HorsesList";
import HorseDetails from "./pages/Horses/HorseDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/horses" element={<HorseList />} />
      <Route path="/horses/:id" element={<HorseDetails />} />
    </Routes>
  );
}
