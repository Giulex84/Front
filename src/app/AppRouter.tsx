import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Agreements from "../pages/Agreements";
import CreatePact from "../pages/CreatePact";
import PactDetail from "../pages/PactDetail";
import VerifyPi from "../pages/VerifyPi";

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

      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
