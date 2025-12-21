import React from "react";

const Login: React.FC = () => {
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
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Sign in with Pi Network
      </h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "420px" }}>
        Your Pi identity makes this pact real.
      </p>

      <p style={{ fontSize: "0.95rem", marginBottom: "2rem", opacity: 0.8 }}>
        PactPI uses Pi Network authentication to ensure real and accountable
        participants.
      </p>

        <button
  style={{
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
  }}
  onClick={() => {
    window.location.href = "/dashboard";
  }}
>
  Login with Pi
</button>

    </div>
  );
};

export default Login;
