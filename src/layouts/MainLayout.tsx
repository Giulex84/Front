import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
