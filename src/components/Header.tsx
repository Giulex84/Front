import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "1rem 2rem",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <strong>PactPI</strong>

      <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem" }}>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          Dashboard
        </Link>

        <Link to="/profile" style={{ textDecoration: "none" }}>
          Profile
        </Link>

        <Link to="/verify" style={{ textDecoration: "none" }}>
          Verify
        </Link>
      </div>
    </div>
  );
};

export default Header;
