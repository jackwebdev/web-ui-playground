import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlassUi from "./pages/GlassUi";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glassui" element={<GlassUi />} />
      </Routes>
    </Router>
  );
}
