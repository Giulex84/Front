// src/pages/VerifyPi.tsx

import { useState } from "react";

declare global {
  interface Window {
    Pi?: any;
  }
}

export default function VerifyPi() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const startVerifyPayment = async () => {
    setError(null);

    if (!window.Pi) {
      setError("Pi SDK not available. Open this page in Pi Browser.");
      return;
    }

    setLoading(true);

    try {
      await window.Pi.createPayment(
        {
          amount: 0.01,
          memo: "Verify Pactpi account",
          metadata: {
            purpose: "verify",
          },
        },
        {
          onReadyForServerApproval: (paymentId: string) => {
            // frontend-only flow → approve immediately
            window.Pi.approvePayment(paymentId);
          },

          onReadyForServerCompletion: (
            paymentId: string,
            txid: string
          ) => {
            console.log("Payment completed", paymentId, txid);
            alert("Verification successful 🎉");
          },

          onCancel: () => {
            setError("Payment cancelled");
          },

          onError: (err: any) => {
            console.error(err);
            setError("Payment failed");
          },
        }
      );
    } catch (err) {
      console.error(err);
      setError("Failed to start payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={startVerifyPayment} disabled={loading}>
        Verify with Pi (0.01 Pi)
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>
      )}
    </div>
  );
}
