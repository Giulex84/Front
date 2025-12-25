import React, { useState } from "react";
import Header from "../components/Header";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const VerifyPi: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const startVerification = async () => {
    if (!(window as any).Pi) {
      alert("Open this app in Pi Browser");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 1️⃣ AUTH
      const auth = await (window as any).Pi.authenticate(["payments"]);

      // 2️⃣ CREATE PAYMENT (backend)
      await fetch(`${BACKEND_URL}/api/pi/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: auth.user.uid,
          username: auth.user.username,
        }),
      });

      // 3️⃣ OPEN PI WALLET
      await (window as any).Pi.createPayment(
        {
          amount: 0.01,
          memo: "PactPi app verification",
          metadata: { type: "app_verification" },
        },
        {
          onReadyForServerApproval: async (paymentId: string) => {
            await fetch(`${BACKEND_URL}/api/pi/approve`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId }),
            });
          },

          onReadyForServerCompletion: async (paymentId: string, txid: string) => {
            await fetch(`${BACKEND_URL}/api/pi/complete`, {
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
    } catch {
      setError("Failed to start payment");
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem" }}>
        <h1>App Verification</h1>

        <p>
          Pi Network requires a one-time symbolic transaction to verify that this
          application is correctly integrated with the Pi SDK.
        </p>

        {!success ? (
          <button
            onClick={startVerification}
            disabled={loading}
            style={{ marginTop: "2rem", padding: "1rem 2rem", fontSize: "1rem" }}
          >
            {loading ? "Processing..." : "Verify with Pi (0.01 Pi)"}
          </button>
        ) : (
          <p style={{ color: "green", marginTop: "2rem" }}>
            ✅ Verification completed successfully
          </p>
        )}

        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      </div>
    </>
  );
};

export default VerifyPi;
