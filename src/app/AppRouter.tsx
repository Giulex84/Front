import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import VerifyPi from "../pages/VerifyPi";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verify" element={<VerifyPi />} />

      {/* PLACEHOLDER TEMPORANEI */}
      <Route path="/agreements" element={<Placeholder title="Agreements" />} />
      <Route path="/about" element={<Placeholder title="About Pactpi" />} />
      <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
      <Route path="/terms" element={<Placeholder title="Terms of Service" />} />
    </Routes>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{title}</h1>
      <p>Page under construction.</p>
    </div>
  );
}
