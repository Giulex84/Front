import { Link } from "react-router-dom";
import Badge, { BadgeType } from "../components/Badge";

const mockAgreements = [
  {
    id: "1",
    title: "Pi DApp development support",
    description: "Help building frontend and Pi SDK integration.",
    owner: "pi_dev_88",
    badges: ["Verified", "Active"] as BadgeType[],
  },
  {
    id: "2",
    title: "Graphic design for Pi projects",
    description: "Logos, stickers, and branding assets.",
    owner: "design_pi",
    badges: ["New"] as BadgeType[],
  },
];

export default function Agreements() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Agreements</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        Browse digital pacts created by members of the Pi community.
      </p>

      <Link to="/agreements/new">
        <button style={{ marginBottom: "2rem" }}>
          Create a new pact
        </button>
      </Link>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {mockAgreements.map((a) => (
          <div
            key={a.id}
            style={{
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <h3>{a.title}</h3>
            <p>{a.description}</p>

            <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
              Offered by <strong>{a.owner}</strong>
            </p>

            <div style={{ marginTop: "0.5rem" }}>
              {a.badges.map((b) => (
                <Badge key={b} type={b} />
              ))}
            </div>

            <Link to={`/agreements/${a.id}`}>
              <button style={{ marginTop: "1rem" }}>
                View pact
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
