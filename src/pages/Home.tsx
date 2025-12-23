import "./Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <h1 className="home-title">PactPI</h1>

      <p className="home-tagline">
        Trust is not automatic. Pacts are.
      </p>

      <p className="home-description">
        PactPI lets users create mutual digital commitments based on trust and
        responsibility. This is not a financial or legal service.
      </p>

      <footer className="home-footer">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </footer>
    </main>
  );
}
