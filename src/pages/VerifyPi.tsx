// src/pages/VerifyPi.tsx

import { piService } from "../services/pi/piService";

export default function VerifyPi() {
  const handleVerify = () => {
    piService.createPayment(0.01, "Verify Pactpi account");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={handleVerify}>
        Verify with Pi (0.01 Pi)
      </button>
    </div>
  );
}
