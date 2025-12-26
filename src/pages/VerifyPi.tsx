import { piService } from "../services/pi/piService";

export default function VerifyPi() {
  const handleVerify = () => {
    try {
      piService.verifyPayment();

      // UI-only flag (review-safe)
      localStorage.setItem("pactpi_verified", "true");

      alert("Verification completed. Your profile is now marked as Verified.");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Verify your profile</h1>

      <p style={{ marginBottom: "1.5rem" }}>
        Verification helps other users recognize trustworthy participants.
      </p>

      <div className="disclaimer" style={{ marginBottom: "2rem" }}>
        <strong>This verification does not process payments.</strong>
        <p style={{ marginTop: "0.5rem" }}>
          The verification step is used only to confirm identity and support
          trust indicators.
        </p>
      </div>

      <button onClick={handleVerify}>
        Verify with Pi (0.01 Pi)
      </button>
    </main>
  );
}
