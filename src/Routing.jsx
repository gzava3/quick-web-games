import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcomepage";
import Homepage from "./pages/Homepage";
import UltimateTicTacToe from "./pages/UltimateTicTacToe";

export default function Routing() {
  return (
    <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/homepage" element={<Homepage />} />
	    <Route path="/UltimateTicTacToe" element={<UltimateTicTacToe />} />
    </Routes>
  );
}
