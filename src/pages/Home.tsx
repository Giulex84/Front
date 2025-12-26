import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main
      className="page"
      style={{
        padding: "3rem 1.5rem",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>
          Digital agreements built on trust
        </h1>

        <p style={{ fontSize: "1.15rem", maxWidth: "720px", color: "var(--text-muted)" }}>
          Create clear digital pacts, build reputation, and connect with reliable
          people in the Pi ecosystem.
        </p>
      </section>

      {/* INTRO */}
      <section style={{ marginBottom: "3rem", maxWidth: "760px" }}>
        <p>
          <strong>PactPI</strong> helps people describe agreements in a clear and
          transparent way, allowing trust to grow through consistent behavior and accountability.
        </p>

        <p style={{ marginTop: "1rem" }}>
          This platform focuses on reputation and long-term trust — not payments or intermediaries.
        </p>
      </section>

      {/* DISCLAIMER */}
      <section className="card" style={{ marginBottom: "4rem", maxWidth: "760px" }}>
        <strong>PactPI does not process payments.</strong>
        <p style={{ marginTop: "0.5rem" }}>
          Users independently decide how to fulfill agreements and manage any form
          of compensation outside the platform.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>How PactPI works</h2>

        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          <div className="card">
            <h3>Create a pact</h3>
            <p>
              Describe clearly what you offer, what is expected, and the scope of the agreement.
            </p>
          </div>

          <div className="card">
            <h3>Build trust</h3>
            <p>
              Reliability is reflected over time through completed agreements and participation.
            </p>
          </div>

          <div className="card">
            <h3>Stay transparent</h3>
            <p>
              Public pacts help others understand commitments and evaluate trustworthiness.
            </p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ marginBottom: "4rem", maxWidth: "760px" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>Why PactPI</h2>
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>No intermediaries</li>
          <li>No managed payments</li>
          <li>Transparency over promises</li>
          <li>Reputation built on behavior</li>
          <li>Designed for the Pi Network ecosystem</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{ marginBottom: "5rem" }}>
        <Link to="/agreements/create">
          <button style={{ marginRight: "1rem" }}>Create your first pact</button>
        </Link>

        <Link to="/agreements">
          <button className="secondary">Browse public pacts</button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          fontSize: "0.9rem",
          color: "var(--text-muted)",
        }}
      >
        <p>PactPI is an independent platform for digital agreements and reputation.</p>

        <p style={{ marginTop: "0.5rem" }}>
          <Link to="/privacy">Privacy Policy</Link> ·{" "}
          <Link to="/terms">Terms of Service</Link>
        </p>
      </footer>
    </main>
  );
}
