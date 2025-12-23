import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME DEFAULT */}
        <Route path="/" element={<Home />} />

        {/* LEGAL */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
