import { useState } from "react";

export default function VerifyPi() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const startVerifyPayment = async () => {
    setError(null);

    if (!window.Pi) {
      setError("Open this page in Pi Browser");
      return;
    }

    setLoading(true);

    try {
      await window.Pi.createPayment(
        {
          amount: 0.01,
          memo: "Verify Pactpi account",
          metadata: { purpose: "verify" },
        },
        {
          onReadyForServerApproval: (paymentId: string) => {
            window.Pi?.approvePayment?.(paymentId);
          },
          onReadyForServerCompletion: () => {
            alert("Verification successful");
          },
          onCancel: () => setError("Payment cancelled"),
          onError: () => setError("Payment failed"),
        }
      );
    } catch {
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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
