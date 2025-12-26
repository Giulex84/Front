import { useState } from "react";
import "./Verify.css";

export default function VerifyPi() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const startPayment = async () => {
    setError(null);

    if (!window.Pi) {
      setError("Open this page inside Pi Browser.");
      return;
    }

    try {
      setLoading(true);

      await window.Pi.createPayment(
        {
          amount: 0.01,
          memo: "Verify Pactpi account",
          metadata: { purpose: "verify" },
        },
        {
          onReadyForServerApproval: async () => {},
          onReadyForServerCompletion: async () => {},
          onCancel: () => setError("Payment cancelled."),
          onError: (err) =>
            setError(err?.message || "Failed to start payment"),
        }
      );
    } catch (e: any) {
      setError(e?.message || "Failed to start payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verify">
      <div className="verify_card">
        <h1>Verify with Pi</h1>
        <p>Confirm your account with a small Pi payment.</p>

        <button onClick={startPayment} disabled={loading}>
          {loading ? "Processing..." : "Verify with Pi (0.01 Pi)"}
        </button>

        {error && <p className="verify_error">{error}</p>}
      </div>
    </div>
  );
}
