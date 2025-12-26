import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Agreements from "../pages/Agreements";
import CreatePact from "../pages/CreatePact";
import PactDetail from "../pages/PactDetail";
import VerifyPi from "../pages/VerifyPi";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Agreements */}
      <Route path="/agreements" element={<Agreements />} />
      <Route path="/agreements/create" element={<CreatePact />} />
      <Route path="/pact/:id" element={<PactDetail />} />

      {/* Pi verification */}
      <Route path="/verify" element={<VerifyPi />} />

      {/* Legal */}
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />

      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
