import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Clear agreements, simple trust.</h1>
        <p className="hero-sub">
          PactPI helps people create clear digital pacts and build reputation
          through transparent commitments — not payments.
        </p>

        <div className="actions">
          <Link to="/agreements/create">
            <button>Create a pact</button>
          </Link>
          <Link to="/agreements">
            <button className="secondary">View public pacts</button>
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <p>
          <strong>PactPI</strong> is a reputation-first platform for the Pi
          ecosystem. Users describe commitments clearly and let behavior speak
          over time.
        </p>
        <p className="muted">
          No payments. No intermediaries. No hidden logic.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <h2>How it works</h2>
        <div className="grid">
          <div className="card">
            <h3>Create a pact</h3>
            <p>
              Describe what you offer, what you expect, and the scope of the
              agreement.
            </p>
          </div>

          <div className="card">
            <h3>Stay transparent</h3>
            <p>
              Public pacts allow others to understand commitments and behavior.
            </p>
          </div>

          <div className="card">
            <h3>Build reputation</h3>
            <p>
              Reliability emerges over time through fulfilled or broken pacts.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>PactPI is a non-custodial reputation layer for the Pi ecosystem.</p>
        <p>
          <Link to="/privacy">Privacy</Link> ·{" "}
          <Link to="/terms">Terms</Link>
        </p>
      </footer>
    </main>
  );
}
