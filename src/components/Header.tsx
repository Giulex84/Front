import React from "react";

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
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
      </div>
    </div>
  );
};

export default Header;
