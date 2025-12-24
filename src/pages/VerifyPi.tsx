import React, { useState } from "react";
import Header from "../components/Header";

const VerifyPi: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerifyPayment = () => {
    if (typeof Pi === "undefined") {
      alert("Open this app inside Pi Browser");
      return;
    }

    setLoading(true);
    setError(null);

    Pi.createPayment(
      {
        amount: 0.01,
        memo: "PactPI app verification",
        metadata: {
          type: "app_verification",
        },
      },
      {
        onReadyForServerApproval: () => {
          // Backend non richiesto per test
        },
        onReadyForServerCompletion: () => {
          setSuccess(true);
          setLoading(false);
        },
        onCancel: () => {
          setError("Transaction cancelled");
          setLoading(false);
        },
        onError: () => {
          setError("Payment error");
          setLoading(false);
        },
      }
    );
  };

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
        <h1>App Verification</h1>

        <p style={{ marginBottom: "1.5rem", opacity: 0.85 }}>
          Pi Network requires a one-time symbolic transaction to verify that this
          application is correctly integrated.
        </p>

        {!success ? (
          <button
            onClick={handleVerifyPayment}
            disabled={loading}
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Processing..." : "Verify with Pi (0.01 Pi)"}
          </button>
        ) : (
          <p style={{ color: "green", marginTop: "1.5rem" }}>
            ✅ Verification transaction completed successfully.
          </p>
        )}

        {error && (
          <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>
        )}
      </div>
    </>
  );
};

export default VerifyPi;
