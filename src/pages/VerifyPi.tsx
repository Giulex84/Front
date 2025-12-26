import { startVerifyPayment } from "../services/pi/piService";

export default function VerifyPi() {
  return (
    <div style={{ padding: 24 }}>
      <button onClick={startVerifyPayment}>
        Verify with Pi (0.01 Pi)
      </button>
    </div>
  );
}
