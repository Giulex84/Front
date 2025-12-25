import { useState } from "react";

declare global {
  interface Window {
    Pi: any;
  }
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const PI_APP_ID = import.meta.env.VITE_PI_APP_ID;

export default function VerifyPi() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const startVerification = async () => {
    if (!window.Pi) {
      setStatus("Pi SDK not available");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await window.Pi.authenticate(["payments"], () => {});

      await window.Pi.createPayment(
        {
          amount: 0.01,
          memo: "App verification",
          metadata: { type: "verification" },
        },
        {
          onReadyForServerApproval: async (paymentId: string) => {
            await fetch(`${BACKEND_URL}/api/pi/approve`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId }),
            });
          },

          onReadyForServerCompletion: async (
            paymentId: string,
            txid?: string
          ) => {
            await fetch(`${BACKEND_URL}/api/pi/complete`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId, txid }),
            });

            setStatus("Verification completed ✅");
            setLoading(false);
          },

          onCancel: () => {
            setStatus("Transaction cancelled");
            setLoading(false);
          },

          onError: (error: any) => {
            console.error(error);
            setStatus("Failed to verify payment");
            setLoading(false);
          },
        }
      );
    } catch (err) {
      console.error(err);
      setStatus("Failed to start payment");
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>App Verification</h1>
      <p>
        Pi Network requires a one-time symbolic transaction to verify that this
        application is correctly integrated with the Pi SDK.
      </p>

      <button onClick={startVerification} disabled={loading}>
        {loading ? "Processing..." : "Verify with Pi (0.01 Pi)"}
      </button>

      {status && <p style={{ marginTop: 12, color: "red" }}>{status}</p>}
    </div>
  );
}
