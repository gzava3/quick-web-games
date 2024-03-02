import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcomepage";
import Homepage from "./pages/Homepage";

export default function Routing() {
  return (
    <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}
