export type PiUser = {
  uid: string;
  username: string;
};

export async function piLogin(): Promise<PiUser | null> {
  if (!window.Pi || !window.Pi.authenticate) {
    return null;
  }

  const scopes = ["username"];

  const result = await window.Pi.authenticate(scopes, {
    onIncompletePaymentFound: () => {},
  });

  return {
    uid: result.user.uid,
    username: result.user.username,
  };
}
