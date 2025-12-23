import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import { PiUser } from "./App";

type Props = {
  user: PiUser | null;
};

export default function AppRouter({ user }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pagine pubbliche */}
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Pagine protette */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" />}
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
