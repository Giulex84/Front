declare global {
  interface Window {
    Pi: any;
  }
}

export default function VerifyPi() {
  const backend = import.meta.env.VITE_BACKEND_URL;

  const verify = async () => {
    try {
      const payment = await window.Pi.createPayment(
        {
          amount: 0.01,
          memo: "App verification",
          metadata: { type: "verify" }
        },
        {
          onReadyForServerApproval: async (paymentId: string) => {
            await fetch(`${backend}/api/pi/approve`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId })
            });
          },

          onReadyForServerCompletion: async (paymentId: string, txid: string) => {
            await fetch(`${backend}/api/pi/complete`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId, txid })
            });
          },

          onCancel: () => alert("Transaction cancelled"),
          onError: (e: any) => {
            console.error(e);
            alert("Payment error");
          }
        }
      );
    } catch (e) {
      console.error(e);
      alert("Failed to start payment");
    }
  };

  return (
    <button onClick={verify}>
      Verify with Pi (0.01 Pi)
    </button>
  );
}
