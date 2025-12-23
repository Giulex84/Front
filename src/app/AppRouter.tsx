import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import CreatePact from "../pages/CreatePact";
import Profile from "../pages/Profile";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

import type { PiUser } from "./App";

type AppRouterProps = {
  user: PiUser | null;
};

export default function AppRouter({ user }: AppRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Home />}
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* PROTECTED */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" />}
        />

        <Route
          path="/create"
          element={user ? <CreatePact /> : <Navigate to="/" />}
        />

        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/" />}
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
