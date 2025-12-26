import { Link } from "react-router-dom";

export default function Agreements() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Pacts</h1>
        <p className="text-muted">
          Public agreements help build trust through transparency.
        </p>
      </header>

      <div className="list">
        <div className="card">
          <h3>Web design support for Pi dApp</h3>
          <p className="text-muted">
            Design UI components and landing pages.
          </p>

          <div className="card-meta">
            <span className="badge badge-good">Reliable</span>
            <Link to="/pact/1">View details →</Link>
          </div>
        </div>

        <div className="card">
          <h3>Smart contract review</h3>
          <p className="text-muted">
            Review logic and edge cases for Pi-based contracts.
          </p>

          <div className="card-meta">
            <span className="badge badge-new">New</span>
            <Link to="/pact/2">View details →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
