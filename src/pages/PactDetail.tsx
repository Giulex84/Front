import React, { useState } from "react";

type PactStatus =
  | "Awaiting agreement"
  | "Active commitment"
  | "Fulfilled"
  | "Withdrawn";

const initialPact = {
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
  const [status, setStatus] = useState<PactStatus>(initialPact.status);

  const handleAccept = () => {
    setStatus("Active commitment");
  };

  const handleFulfill = () => {
    setStatus("Fulfilled");
  };

  const handleWithdraw = () => {
    setStatus("Withdrawn");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {initialPact.title}
      </h1>

      <p style={{ marginBottom: "1rem", opacity: 0.8 }}>
        Created on {initialPact.createdAt}
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        {initialPact.description}
      </p>

      <div style={{ marginBottom: "1.5rem" }}>
        <p>
          <strong>Creator:</strong> {initialPact.creator}
        </p>
        <p>
          <strong>Partner:</strong> {initialPact.partner}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
      </div>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {status === "Awaiting agreement" && (
          <button onClick={handleAccept}>
            Accept commitment
          </button>
        )}

        {status === "Active commitment" && (
          <button onClick={handleFulfill}>
            Mark as fulfilled
          </button>
        )}

        {status !== "Withdrawn" && status !== "Fulfilled" && (
          <button onClick={handleWithdraw}>
            Withdraw commitment
          </button>
        )}
      </div>

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.7 }}>
        All actions on a pact are intentional and recorded.
      </p>
    </div>
  );
};

export default PactDetail;
