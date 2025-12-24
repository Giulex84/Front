import React, { useState } from "react";
import Header from "../components/Header";

const VerifyPi: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerifyPayment = () => {
    if (!window.Pi) {
      alert("Open this app inside Pi Browser");
      return;
    }

    setLoading(true);
    setError(null);

    window.Pi.createPayment(
      {
        amount: 0.01,
        memo: "PactPi app verification transaction",
        metadata: {
          purpose: "app_verification",
        },
      },
      {
        onReadyForServerApproval: async (paymentId: string) => {
          try {
            await fetch(
              "https://pactpi-pi-payment-backend.vercel.app/approve-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ paymentId }),
              }
            );
          } catch (err) {
            console.error("Backend approval failed", err);
            setError("Backend approval failed");
            setLoading(false);
          }
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
          application is correctly integrated with the Pi SDK.
        </p>

        <p style={{ fontSize: "0.9rem", opacity: 0.75 }}>
          This transaction is not a payment and does not unlock features.
        </p>

        {!success ? (
          <button
            onClick={handleVerifyPayment}
            disabled={loading}
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Processing..." : "Verify with Pi (0.01 Pi)"}
          </button>
        ) : (
          <p style={{ color: "green", marginTop: "2rem" }}>
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
