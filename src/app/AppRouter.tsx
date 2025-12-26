import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import VerifyPi from "../pages/VerifyPi";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verify" element={<VerifyPi />} />
    </Routes>
  );
}
