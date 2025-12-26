import { useState } from "react";
import "./Verify.css";

declare global {
  interface Window {
    Pi?: any;
  }
}

export default function Verify() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const startPayment = async () => {
    setError(null);

    if (!window.Pi) {
      setError("Pi Browser not detected. Open this page inside Pi Browser.");
      return;
    }

    try {
      setLoading(true);

      await window.Pi.createPayment(
        {
          amount: 0.01,
          memo: "Verify Pactpi account",
          metadata: {
            purpose: "verify",
            app: "pactpi",
          },
        },
        {
          onReadyForServerApproval: async () => {},
          onReadyForServerCompletion: async () => {},
          onCancel: () => setError("Payment cancelled."),
          onError: (err: any) =>
            setError(err?.message || "Failed to start payment."),
        }
      );
    } catch (e: any) {
      setError(e?.message || "Failed to start payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verify">
      <div className="verify_card">
        <h1>Verify with Pi</h1>
        <p className="verify_description">
          A small Pi payment is used to verify your Pactpi account.
          This helps prevent abuse and ensures accountability.
        </p>

        <div className="verify_amount">0.01 Pi</div>

        <button
          className="verify_button"
          onClick={startPayment}
          disabled={loading}
        >
          {loading ? "Processing..." : "Verify with Pi"}
        </button>

        {error && <p className="verify_error">{error}</p>}
      </div>
    </div>
  );
}
