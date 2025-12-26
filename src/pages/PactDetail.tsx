import { useParams, Link } from "react-router-dom";

const mockPact = {
  id: "1",
  title: "Pi DApp development support",
  description:
    "I offer help with building Pi Network DApps, including frontend setup, Pi SDK integration, and general guidance. The goal is to support developers who are new to the Pi ecosystem.",
  category: "Development",
  owner: {
    username: "pi_dev_88",
    badges: ["Verified", "Active"],
  },
};

export default function PactDetail() {
  const { id } = useParams();

  // In futuro: fetch reale con id
  console.log("Viewing pact:", id);

  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* TITLE */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h1>{mockPact.title}</h1>
        <p style={{ opacity: 0.8 }}>
          Category: <strong>{mockPact.category}</strong>
        </p>
      </section>

      {/* OWNER */}
      <section
        style={{
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: "
