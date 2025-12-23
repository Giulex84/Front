import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

type Pact = {
  id: string;
  title: string;
  description: string;
  partner: string;
  createdAt: string;
};

const Dashboard: React.FC = () => {
  const [pacts, setPacts] = useState<Pact[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("pacts");
    if (stored) {
      setPacts(JSON.parse(stored));
    }
  }, []);

  const deletePact = (id: string) => {
    const updated = pacts.filter((p) => p.id !== id);
    setPacts(updated);
    localStorage.setItem("pacts", JSON.stringify(updated));
  };

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "100vh",
          padding: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h1 style={{ fontSize: "2rem" }}>My Commitments</h1>

          <Link to="/create">
            <button
              style={{
                padding: "0.6rem 1.2rem",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              + New Pact
            </button>
          </Link>
        </div>

        {pacts.length === 0 ? (
          <p style={{ opacity: 0.7 }}>
            You haven’t created any pacts yet.
          </p>
        ) : (
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {pacts.map((pact) => (
              <div
                key={pact.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "1rem",
                }}
              >
                <h3 style={{ marginBottom: "0.5rem" }}>{pact.title}</h3>

                {pact.description && (
                  <p style={{ opacity: 0.85, marginBottom: "0.5rem" }}>
                    {pact.description}
                  </p>
                )}

                <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                  Partner: <strong>{pact.partner}</strong>
                </p>

                <p style={{ fontSize: "0.8rem", opacity: 0.6 }}>
                  Created: {new Date(pact.createdAt).toLocaleString()}
                </p>
                <div style={{ marginTop: "2rem", opacity: 0.85 }}>
  <p style={{ fontSize: "0.9rem" }}>
    Pi Network requires a one-time app verification.
  </p>

  <Link
    to="/verify"
    style={{
      display: "inline-block",
      marginTop: "0.5rem",
      color: "#6b4eff",
      fontWeight: 500,
    }}
  >
    App Verification (Pi Test Payment)
  </Link>
</div>

<div style={{ marginTop: "2rem", opacity: 0.85 }}>
  <hr style={{ marginBottom: "1rem" }} />

  <p style={{ fontSize: "0.9rem" }}>
    Pi Network requires a one-time verification transaction.
  </p>

  <Link
    to="/verify"
    style={{
      display: "inline-block",
      marginTop: "0.5rem",
      color: "#6b4eff",
      fontWeight: 500,
    }}
  >
    App Verification (Pi Test Payment)
  </Link>
</div>

                <div style={{ marginTop: "0.75rem" }}>
                  <button
                    onClick={() => deletePact(pact.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#c00",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
