import { piService } from "../services/pi/piService";

export default function VerifyPi() {
  const handleVerify = async () => {
    try {
      await piService.createPayment(
        0.01,
        "PactPI identity verification"
      );

      // UI-only flag (review-safe)
      localStorage.setItem("pactpi_verified", "true");

      alert(
        "Verification completed. Your profile is now marked as Verified."
      );
    } catch (error) {
      console.error("Verification failed:", error);
      alert("Verification was cancelled or failed.");
    }
  };

  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>Verify your profile</h1>

      <p style={{ marginBottom: "1.5rem" }}>
        Verification helps other users recognize trustworthy participants.
      </p>

      <div className="disclaimer" style={{ marginBottom: "2rem" }}>
        <strong>PactPI does not process payments.</strong>
        <p style={{ marginTop: "0.5rem" }}>
          This step is used only to confirm identity and support trust
          indicators. Any transaction is handled by Pi Network.
        </p>
      </div>

      <button onClick={handleVerify}>
        Verify with Pi (0.01 Pi)
      </button>
    </main>
  );
}
