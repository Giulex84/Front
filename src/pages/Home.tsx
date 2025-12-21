
import React from "react";

const Home: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Trust is not automatic.
        <br />
        Pacts are.
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
        Create meaningful commitments with other Pi users.
      </p>

      <p
        style={{
          fontSize: "1rem",
          maxWidth: "480px",
          marginBottom: "2rem",
          opacity: 0.8,
        }}
      >
        A pact is a mutual agreement built on identity and responsibility,
        <br />
        not a financial contract.
      </p>

      <button
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        Enter PactPI
      </button>
    </div>
  );
};

export default Home;
