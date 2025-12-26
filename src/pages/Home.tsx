import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* HERO */}
      <section style={{ marginBottom: "3rem" }}>
        <h1>Digital agreements built on trust.</h1>
        <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          Create clear digital pacts, build reputation, and connect with reliable
          people in the Pi ecosystem.
        </p>
      </section>

      {/* INTRO */}
      <section style={{ marginBottom: "2.5rem" }}>
        <p>
          <strong>PactPI</strong> is a platform designed to help people create
          digital agreements (<em>pacts</em>) and build trust over time.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Users can describe what they offer, define commitments, and interact
          transparently with others — all without intermediaries.
        </p>
      </section>

      {/* IMPORTANT DISCLAIMER */}
      <section
        style={{
          padding: "1.5rem",
          background: "#f5f5f5",
          borderRadius: "8px",
          marginBottom: "2.5rem",
        }}
      >
        <strong>PactPI does not process payments.</strong>
        <p style={{ marginTop: "0.5rem" }}>
          Users independently decide how to fulfill agreements and handle any
          compensation outside the platform.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>How PactPI works</h2>
        <ol style={{ marginTop: "1rem" }}>
          <li>
            <strong>Create a pact</strong> – Clearly describe an agreement,
            collaboration, or service you are offering.
          </li>
          <li>
            <strong>Build trust</strong> – Reliability is reflected through
            completed pacts and community feedback.
          </li>
          <li>
            <strong>Stay transparent</strong> – Public agreements help others
            evaluate trustworthiness.
          </li>
        </ol>
      </section>

      {/* WHY */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>Why PactPI</h2>
        <ul style={{ marginTop: "1rem" }}>
          <li>No intermediaries</li>
          <li>No managed payments</li>
          <li>Transparency over promises</li>
          <li>Reputation built on behavior</li>
          <li>Designed for the Pi Network ecosystem</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{ marginBottom: "4rem" }}>
        <Link to="/agreements">
          <button style={{ marginRight: "1rem" }}>
            Create your first pact
          </button>
        </Link>

        <Link to="/about">
          <button>Learn how PactPI works</button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{ fontSize: "0.9rem", opacity: 0.8 }}>
        <p>
          PactPI is an independent platform for digital agreements and
          reputation.
        </p>
        <p>
          <Link to="/privacy">Privacy Policy</Link> ·{" "}
          <Link to="/terms">Terms of Service</Link>
        </p>
      </footer>
    </main>
  );
}
