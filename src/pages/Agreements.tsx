import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import type { BadgeType } from "../components/Badge";

type Pact = {
  id: string;
  title: string;
  description: string;
  badge: BadgeType;
};

export default function Agreements() {
  const agreements: Pact[] = [
    {
      id: "1",
      title: "Web design support for Pi dApp",
      description: "Design UI components and landing pages.",
      badge: "Active",
    },
    {
      id: "2",
      title: "Smart contract review",
      description: "Review logic and edge cases for Pi-based contracts.",
      badge: "New",
    },
  ];

  return (
    <main
      className="page"
      style={{
        padding: "3rem 1.5rem",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <header className="page-header">
        <h1>Pacts</h1>
        <p className="text-muted">
          Public agreements help build trust through transparency.
        </p>
      </header>

      <section style={{ display: "grid", gap: "2rem" }}>
        {agreements.map((pact) => (
          <div key={pact.id} className="card">
            <h2 style={{ marginBottom: "0.5rem" }}>{pact.title}</h2>
            <p style={{ marginBottom: "1rem" }}>{pact.description}</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Badge type={pact.badge} />

              <Link to={`/pact/${pact.id}`}>
                View details →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
