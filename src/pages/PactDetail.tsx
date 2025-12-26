import { useParams, Link } from "react-router-dom";
import Badge, { BadgeType } from "../components/Badge";

const mockPact = {
  id: "1",
  title: "Pi DApp development support",
  description:
    "I offer help with building Pi Network DApps, including frontend setup, Pi SDK integration, and general guidance. The goal is to support developers who are new to the Pi ecosystem.",
  category: "Development",
  owner: {
    username: "pi_dev_88",
    badges: ["Verified", "Active"] as BadgeType[],
  },
};

export default function PactDetail() {
  const { id } = useParams();
  console.log("Viewing pact:", id);

  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <section style={{ marginBottom: "1.5rem" }}>
        <h1>{mockPact.title}</h1>
        <p style={{ opacity: 0.8 }}>
          Category: <strong>{mockPact.category}</strong>
        </p>
      </section>

      <section
        style={{
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <p>
          Offered by <strong>{mockPact.owner.username}</strong>
        </p>

        <div style={{ marginTop: "0.5rem" }}>
          {mockPact.owner.badges.map((b) => (
            <Badge key={b} type={b} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>About this pact</h2>
        <p style={{ marginTop: "0.75rem", lineHeight: 1.6 }}>
          {mockPact.description}
        </p>
      </section>

      <section
        style={{
          background: "#f5f5f5",
          padding: "1.25rem",
          borderRadius: "8px",
          marginBottom: "2.5rem",
        }}
      >
        <strong>PactPI does not process payments.</strong>
        <p style={{ marginTop: "0.5rem", fontSize: "0.95rem" }}>
          The platform only helps users describe agreements and assess
          reliability. Any compensation is decided independently.
        </p>
      </section>

      <section>
        <Link to="/agreements">
          <button style={{ marginRight: "1rem" }}>
            Back to agreements
          </button>
        </Link>
        <Link to="/profile">
          <button>View profile</button>
        </Link>
      </section>
    </main>
  );
}
