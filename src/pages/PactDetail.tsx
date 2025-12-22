import React, { useState } from "react";
import Header from "../components/Header";

type PactStatus =
  | "Awaiting agreement"
  | "Active commitment"
  | "Fulfilled"
  | "Withdrawn";

interface TrustSignal {
  label: string;
  description: string;
  type: "positive" | "neutral";
}

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

const partnerTrustSignals: TrustSignal[] = [
  {
    label: "Reliable partner",
    description: "Has fulfilled multiple commitments on PactPI.",
    type: "positive",
  },
  {
    label: "Verified by activity",
    description: "Identity verified through consistent platform usage.",
    type: "positive",
  },
  {
    label: "Limited history",
    description: "This participant has a limited number of completed pacts.",
    type: "neutral",
  },
];

const PactDetail: React.FC = () => {
  const [status, setStatus] = useState<PactStatus>(initialPact.status);

  const handleAccept = () => setStatus("Active commitment");
  const handleFulfill = () => setStatus("Fulfilled");
  const handleWithdraw = () => setStatus("Withdrawn");

  return (
    <>
      <Header />

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

        <p style={{ opacity: 0.7, marginBottom: "1rem" }}>
          Created on {initialPact.createdAt}
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          {initialPact.description}
        </p>

        <div style={{ marginBottom: "1.5rem", fontSize: "0.95rem" }}>
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

        {/* Trust signals */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            Partner trust signals
          </h3>

          <div style={{ display: "grid", gap: "0.75rem" }}>
            {partnerTrustSignals.map((signal, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "6px",
                  padding: "0.75rem",
                  backgroundColor:
                    signal.type === "positive" ? "#f6fffa" : "#fafafa",
                }}
              >
                <strong>{signal.label}</strong>
                <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                  {signal.description}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "0.85rem",
              opacity: 0.65,
              marginTop: "0.75rem",
            }}
          >
            Trust signals are informational and based on observable activity
            within PactPI. They do not represent guarantees or judgments.
          </p>
        </div>

        {/* User awareness before actions */}
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ fontSize: "0.9rem", opacity: 0.75 }}>
            Before taking action, make sure you understand the commitment and
            review the trust signals carefully.
          </p>
        </div>

        {/* Actions */}
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

        <p
          style={{
            marginTop: "2rem",
            fontSize: "0.85rem",
            opacity: 0.7,
          }}
        >
          All actions on a pact are intentional and recorded.
        </p>
      </div>
    </>
  );
};

export default PactDetail;
