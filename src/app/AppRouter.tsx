import type { PiUser } from "../services/piAuth";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import VerifyPi from "../pages/VerifyPi";

type Props = {
  user: PiUser | null;
};

export default function AppRouter({ user }: Props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verify" element={<VerifyPi />} />
    </Routes>
  );
}
