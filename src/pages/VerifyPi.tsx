import React, { useState } from "react";
import Header from "../components/Header";

const BACKEND = "https://pactpi-pi-payment-backend.vercel.app";

const VerifyPi: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = async () => {
    if (!window.Pi) {
      alert("Open this app in Pi Browser");
      return;
    }

    setLoading(true);
    setError(null);

    window.Pi.createPayment(
      {
        amount: 0.01,
        memo: "PactPI App Verification",
        metadata: { type: "app_verification" },
      },
      {
        onReadyForServerApproval: async (paymentId: string) => {
          await fetch(`${BACKEND}/api/pi/approve`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentId }),
          });
        },

        onReadyForServerCompletion: async (
          paymentId: string,
          txid: string
        ) => {
          await fetch(`${BACKEND}/api/pi/complete`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentId, txid }),
          });

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
      <div style={{ padding: "2rem", maxWidth: "720px", margin: "0 auto" }}>
        <h1>App Verification</h1>

        <p>
          Pi Network requires a one-time symbolic transaction to verify this app.
        </p>

        {!success ? (
          <button
            onClick={handleVerify}
            disabled={loading}
            style={{ padding: "0.75rem 1.5rem", fontSize: "1rem" }}
          >
            {loading ? "Processing..." : "Verify with Pi (0.01 Pi)"}
          </button>
        ) : (
          <p style={{ color: "green" }}>
            ✅ Verification completed successfully
          </p>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
};

export default VerifyPi;
