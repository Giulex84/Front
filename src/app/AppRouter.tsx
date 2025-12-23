import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import CreatePact from "../pages/CreatePact";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import VerifyPi from "../pages/VerifyPi";
import type { PiUser } from "./App";

type AppRouterProps = {
  user: PiUser | null;
};

export default function AppRouter({ user }: AppRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Home />}
        />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" />}
        />

        <Route
          path="/create"
          element={user ? <CreatePact /> : <Navigate to="/" />}
        />

        <Route
          path="/verify"
          element={user ? <VerifyPi /> : <Navigate to="/" />}
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
