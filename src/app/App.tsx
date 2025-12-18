import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Agreements from "../pages/Agreements";
import { useBootstrap } from "../hooks/useBootstrap";

export default function App() {
  useBootstrap();

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agreements" element={<Agreements />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
