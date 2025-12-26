import { Link } from "react-router-dom";

export default function Agreements() {
  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      <h1 style={{ marginBottom: "0.5rem" }}>Pacts</h1>
      <p style={{ color: "#555", marginBottom: "3rem" }}>
        Public agreements help build trust through transparency.
      </p>

      <div style={{ display: "grid", gap: "2rem" }}>
        <div className="card">
          <h2>Web design support for Pi dApp</h2>
          <p>
            Design UI components and landing pages for a Pi Network application.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <span className="badge badge-reliable">Reliable</span>
            <Link to="/pact/1">View details →</Link>
          </div>
        </div>

        <div className="card">
          <h2>Smart contract review</h2>
          <p>
            Review logic and edge cases for Pi-based smart contracts.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <span className="badge badge-new">New</span>
            <Link to="/pact/2">View details →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
