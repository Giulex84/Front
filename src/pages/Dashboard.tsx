import React from "react";

type CommitmentStatus =
  | "Awaiting agreement"
  | "Active commitment"
  | "Fulfilled"
  | "Withdrawn";

interface Commitment {
  id: number;
  title: string;
  partner: string;
  status: CommitmentStatus;
}

const mockCommitments: Commitment[] = [
  {
    id: 1,
    title: "Deliver website design",
    partner: "pi_user_123",
    status: "Active commitment",
  },
  {
    id: 2,
    title: "Review collaboration proposal",
    partner: "pi_user_456",
    status: "Awaiting agreement",
  },
  {
    id: 3,
    title: "Finalize content draft",
    partner: "pi_user_789",
    status: "Fulfilled",
  },
];

const partnerMiniSignals = [
  "Reliable Partner",
  "Limited history",
];

const Dashboard: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        My Commitments
      </h1>

      {mockCommitments.length === 0 ? (
        <p>
          You haven’t created or joined any commitments yet.
          <br />
          A pact begins with intention.
        </p>
      ) : (
        <div>
          {mockCommitments.map((commitment) => (
            <div
              key={commitment.id}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "1rem",
                marginBottom: "1rem",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "/pact";
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>
                {commitment.title}
              </h3>

              <p style={{ marginBottom: "0.25rem", opacity: 0.8 }}>
                With: {commitment.partner}
              </p>

              <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                Status: {commitment.status}
              </p>

              {/* Mini Trust Signals */}
              <div
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.85rem",
                  opacity: 0.75,
                }}
              >
                {partnerMiniSignals.map((signal, index) => (
                  <span key={index} style={{ marginRight: "0.75rem" }}>
                    • {signal}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = "/create";
          }}
        >
          Create new pact
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
