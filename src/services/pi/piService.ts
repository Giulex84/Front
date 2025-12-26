import type { PiUser } from "../../types/pi";

declare global {
  interface Window {
    Pi?: any;
  }
}

/**
 * Login Pi Network
 */
export async function piLogin(): Promise<{ user: PiUser }> {
  if (!window.Pi) {
    throw new Error("Pi SDK not available");
  }

  const auth = await window.Pi.authenticate(
    ["username"],
    {
      onIncompletePaymentFound: () => {},
    }
  );

  return {
    user: {
      uid: auth.user.uid,
      username: auth.user.username,
    },
  };
}

/**
 * Verify payment (0.01 Pi)
 */
export function startVerifyPayment() {
  if (!window.Pi) {
    throw new Error("Pi SDK not available");
  }

  window.Pi.createPayment(
    {
      amount: 0.01,
      memo: "Verify Pactpi",
    },
    {
      onReadyForServerApproval: (paymentId: string) => {
        console.log("Approve payment", paymentId);
      },
      onReadyForServerCompletion: (paymentId: string, txid: string) => {
        console.log("Completed", paymentId, txid);
      },
      onCancel: () => console.log("Cancelled"),
      onError: (e: any) => console.error(e),
    }
  );
}
