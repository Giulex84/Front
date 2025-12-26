import { useState } from "react";

declare global {
  interface Window {
    Pi: any;
  }
}

export default function VerifyPi() {
  const [error, setError] = useState<string | null>(null);

  const verify = () => {
    setError(null);

    if (!window.Pi) {
      setError("Apri l'app nel Pi Browser");
      return;
    }

    try {
      window.Pi.init({ version: "2.0" });

      window.Pi.createPayment(
        {
          amount: 0.01,
          memo: "PactPI verification",
          metadata: {
            purpose: "verify"
          }
        },
        {
          onReadyForServerApproval: () => {},
          onReadyForServerCompletion: () => {},
          onCancel: () => setError("Pagamento annullato"),
          onError: () => setError("Errore Pi payment")
        }
      );
    } catch {
      setError("Failed to start payment");
    }
  };

  return (
    <div>
      <button onClick={verify}>Verify with Pi (0.01 Pi)</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
