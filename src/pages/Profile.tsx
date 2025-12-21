import React from "react";

interface TrustSignal {
  label: string;
  description: string;
  type: "positive" | "neutral";
}

const trustSignals: TrustSignal[] = [
  {
    label: "Consistent Participant",
    description: "Has completed multiple commitments on PactPI.",
    type: "positive",
  },
  {
    label: "Verified by Activity",
    description: "Identity verified and active through PactPI usage.",
    type: "positive",
  },
  {
    label: "Limited history",
    description: "This participant has a limited number of completed commitments.",
    type: "neutral",
  },
];

const Profile: React.FC = () => {
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
        Profile
      </h1>

      {/* Identity */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p>
          <strong>Pi username:</strong> pi_user_123
        </p>
      </div>

      {/* Activity Summary */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p>
          <strong>Commitments created:</strong> 5
        </p>
        <p>
          <strong>Commitments fulfilled:</strong> 3
        </p>
        <p>
          <strong>Commitments withdrawn:</strong> 1
        </p>
      </div>

      {/* Trust Signals */}
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
          Trust signals
        </h2>

        <div style={{ display: "grid", gap: "0.75rem" }}>
          {trustSignals.map((signal, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                padding: "0.75rem",
                backgroundColor:
                  signal.type === "positive" ? "#f5fff7" : "#fafafa",
              }}
            >
              <strong>{signal.label}</strong>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>
        Trust signals are informational and based solely on observed activity
        within PactPI. They do not represent guarantees, judgments, or financial
        advice.
      </p>
    </div>
  );
};

export default Profile;
