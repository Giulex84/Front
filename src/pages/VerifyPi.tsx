import { useState } from "react";

declare global {
  interface Window {
    Pi: any;
  }
}

export default function VerifyPi() {
  const [error, setError] = useState<string | null>(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const startVerification = async () => {
    setError(null);

    if (!window.Pi) {
      setError("Pi SDK not available. Open app in Pi Browser.");
      return;
    }

    try {
      window.Pi.createPayment(
        {
          amount: 0.01,
          memo: "PactPI App Verification",
          metadata: { purpose: "verify" },
        },
        {
          onReadyForServerApproval: async (paymentId: string) => {
            await fetch(`${backendUrl}/api/pi/approve`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId }),
            });
          },

          onReadyForServerCompletion: async (
            paymentId: string,
            txid: string
          ) => {
            await fetch(`${backendUrl}/api/pi/complete`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId, txid }),
            });
          },

          onCancel: () => {
            setError("Transaction cancelled");
          },

          onError: (err: any) => {
            console.error(err);
            setError("Payment error");
          },
        }
      );
    } catch (e) {
      console.error(e);
      setError("Failed to start payment");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={startVerification}>
        Verify with Pi (0.01 Pi)
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
