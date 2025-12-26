import { useState } from "react";

export default function VerifyPi() {
  const [error, setError] = useState<string | null>(null);

  const startPayment = () => {
    if (!window.Pi) {
      setError("Pi Browser not detected");
      return;
    }

    window.Pi.createPayment(
      {
        amount: 0.01,
        memo: "Account verification",
        metadata: { reason: "verify" },
      },
      {
        onReadyForServerApproval: (paymentId: string) => {
          fetch("/api/pi/approve", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentId }),
          });
        },

        onReadyForServerCompletion: (paymentId: string, txid: string) => {
          fetch("/api/pi/complete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentId, txid }),
          });
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
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={startPayment}>
        Verify with Pi (0.01 Pi)
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
