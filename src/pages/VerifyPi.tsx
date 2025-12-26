import { useState } from "react";

declare global {
  interface Window {
    Pi: any;
  }
}

export default function VerifyPi() {
  const [error, setError] = useState<string | null>(null);

  const startVerification = () => {
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
            purpose: "verify",
            app: "PactPI"
          }
        },
        {
          onReadyForServerApproval: (paymentId: string) => {
            console.log("Payment ready:", paymentId);
          },

          onReadyForServerCompletion: (
            paymentId: string,
            txid: string
          ) => {
            console.log("Payment completed:", paymentId, txid);
          },

          onCancel: () => {
            setError("Pagamento annullato");
          },

          onError: (err: any) => {
            console.error(err);
            setError("Errore pagamento");
          }
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
