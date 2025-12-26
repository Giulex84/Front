// src/services/piAuth.ts

declare global {
  interface Window {
    Pi?: any;
  }
}

export type PiUser = {
  uid: string;
  username: string;
};

export async function piLogin(): Promise<{ user: PiUser }> {
  if (!window.Pi) {
    throw new Error("Pi SDK not available");
  }

  const scopes = ["username"];

  const authResult = await window.Pi.authenticate(scopes, {
    onIncompletePaymentFound: () => {},
  });

  return {
    user: {
      uid: authResult.user.uid,
      username: authResult.user.username,
    },
  };
}
