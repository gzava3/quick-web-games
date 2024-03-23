import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcomepage";
import Homepage from "./pages/Homepage";
import Gamepage from "./pages/Gamepage";

export default function Routing() {
  return (
    <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/gamepage" element={<Gamepage />} />
    </Routes>
  );
}
