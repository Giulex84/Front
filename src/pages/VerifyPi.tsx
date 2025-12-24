import React from "react";
import Header from "../components/Header";

const VerifyPi: React.FC = () => {
  const handleVerifyPayment = () => {
    if (!window.Pi) {
      alert("Open this app in Pi Browser");
      return;
    }

    // ⚠️ NESSUNO state update prima di createPayment
    window.Pi.createPayment(
      {
        amount: 0.01,
        memo: "PactPI app verification",
        metadata: {
          type: "app_verification",
        },
      },
      {
        onReadyForServerApproval: async (paymentId: string) => {
          await fetch(
            "https://pactpi-pi-payment-backend.vercel.app/approve-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ paymentId }),
            }
          );
        },

        onReadyForServerCompletion: () => {
          alert("✅ App verification completed successfully");
        },

        onCancel: () => {
          alert("❌ Transaction cancelled");
        },

        onError: (error: any) => {
          console.error(error);
          alert("❌ Payment error");
        },
      }
    );
  };

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "100vh",
          padding: "2rem",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        <h1>App Verification</h1>

        <p style={{ opacity: 0.85, marginBottom: "1.5rem" }}>
          Pi Network requires a one-time symbolic transaction to verify that this
          application is correctly integrated with the Pi SDK.
        </p>

        <p style={{ opacity: 0.75, marginBottom: "2rem" }}>
          This transaction is not a payment and does not unlock features.
        </p>

        <button
          onClick={handleVerifyPayment}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Verify with Pi (0.01 Pi)
        </button>
      </div>
    </>
  );
};

export default VerifyPi;
