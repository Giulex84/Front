// src/app/AppRouter.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyPi from "../pages/VerifyPi";
import Home from "../pages/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<VerifyPi />} />
      </Routes>
    </BrowserRouter>
  );
}
