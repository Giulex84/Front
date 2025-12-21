import React from "react";

type PactStatus =
  | "Awaiting agreement"
  | "Active commitment"
  | "Fulfilled"
  | "Withdrawn";

const mockPact = {
  id: 1,
  title: "Deliver website design",
  description:
    "I will deliver the agreed website design within 7 days, including desktop and mobile layouts.",
  creator: "pi_user_123",
  partner: "pi_user_456",
  status: "Awaiting agreement" as PactStatus,
  createdAt: "2025-01-10",
};

const PactDetail: React.FC = () => {
  const { title, description, creator, partner, status, createdAt } = mockPact;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{title}</h1>

      <p style={{ marginBottom: "1rem", opacity: 0.8 }}>
        Created on {createdAt}
      </p>

      <p style={{ marginBottom: "1.5rem" }}>{description}</p>

      <div style={{ marginBottom: "1.5rem" }}>
        <p>
          <strong>Creator:</strong> {creator}
        </p>
        <p>
          <strong>Partner:</strong> {partner}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
      </div>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {status === "Awaiting agreement" && (
          <button>Accept commitment</button>
        )}

        {status === "Active commitment" && (
          <button>Mark as fulfilled</button>
        )}

        {status !== "Withdrawn" && status !== "Fulfilled" && (
          <button>Withdraw commitment</button>
        )}
      </div>

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.7 }}>
        All actions on a pact are intentional and recorded.
      </p>
    </div>
  );
};

export default PactDetail;
