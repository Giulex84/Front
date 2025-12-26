import { Link } from "react-router-dom";

const MOCK_PACTS = [
  {
    id: "1",
    title: "Web design support for Pi dApp",
    description: "Design UI components and landing pages.",
    badge: "Reliable",
  },
  {
    id: "2",
    title: "Smart contract review",
    description: "Review logic and edge cases for Pi contracts.",
    badge: "New",
  },
];

export default function Agreements() {
  return (
    <main className="container">
      <header className="page-header">
        <h1>Pacts</h1>
        <p className="muted">
          Public agreements help build trust through transparency.
        </p>
      </header>

      <div className="list">
        {MOCK_PACTS.map((pact) => (
          <div key={pact.id} className="card pact-card">
            <div>
              <h3>{pact.title}</h3>
              <p>{pact.description}</p>
              <span className={`badge ${pact.badge.toLowerCase()}`}>
                {pact.badge}
              </span>
            </div>

            <Link to={`/pact/${pact.id}`} className="details-link">
              View details →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
