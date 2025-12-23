import Footer from "../components/Footer";
import { piLogin } from "../services/piAuth";

export default function Home() {
  const handleLogin = async () => {
    try {
      const auth = await piLogin();

      await fetch(import.meta.env.VITE_API_URL + "/auth/pi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessToken: auth.accessToken,
        }),
      });

      window.location.href = "/dashboard";
    } catch (err) {
      alert("Pi login failed. Use Pi Browser.");
    }
  };

  return (
    <>
      <main style={{ padding: "2rem", maxWidth: 720, margin: "0 auto" }}>
        <h1>PactPI</h1>

        <p>
          Trust is not automatic. Pacts are.
        </p>

        <p>
          PactPI lets users create mutual digital commitments based on trust and
          responsibility. This is not a financial or legal service.
        </p>

        <button onClick={handleLogin}>Login with Pi</button>
      </main>

      <Footer />
    </>
  );
}
