// src/services/pi/piService.ts

declare global {
  interface Window {
    Pi: any;
  }
}

export type PiUser = {
  uid: string;
  username: string;
};

export const piService = {
  async init(): Promise<PiUser> {
    if (!window.Pi) {
      throw new Error("Pi SDK not available");
    }

    const scopes = ["username", "payments"];
    const auth = await window.Pi.authenticate(scopes);

    return {
      uid: auth.user.uid,
      username: auth.user.username,
    };
  },

  createPayment(amount: number, memo: string) {
    if (!window.Pi) {
      throw new Error("Pi SDK not available");
    }

    return window.Pi.createPayment(
      { amount, memo },
      {
        onReadyForServerApproval: () => {},
        onReadyForServerCompletion: () => {},
        onCancel: () => {},
        onError: (err: any) => {
          console.error("Payment error", err);
        },
      }
    );
  },
};
