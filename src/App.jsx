import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlassUI from "./pages/GlassUI";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glassui" element={<GlassUI />} />
      </Routes>
    </Router>
  );
}
