import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Agreements from "../pages/Agreements";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import VerifyPi from "../pages/VerifyPi";
import Dashboard from "../pages/Dashboard";
import CreatePact from "../pages/CreatePact";
import PactDetail from "../pages/PactDetail";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/login" element={<Login />} />

      {/* Core app */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/agreements" element={<Agreements />} />
      <Route path="/agreements/new" element={<CreatePact />} />
      <Route path="/agreements/:id" element={<PactDetail />} />
      <Route path="/profile" element={<Profile />} />

      {/* Pi */}
      <Route path="/verify" element={<VerifyPi />} />
    </Routes>
  );
}
