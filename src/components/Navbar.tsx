import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={{ borderBottom: "1px solid #eee" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "1rem",
          display: "flex",
          gap: "1.5rem",
          fontWeight: 600,
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Pactpi
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "#555" }}>
          About
        </Link>
        <Link to="/agreements" style={{ textDecoration: "none", color: "#555" }}>
          Agreements
        </Link>
      </div>
    </header>
  );
}
