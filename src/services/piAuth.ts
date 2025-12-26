export async function piLogin(): Promise<void> {
  if (!window.Pi || !window.Pi.authenticate) {
    return;
  }

  await window.Pi.authenticate(["username"], {
    onIncompletePaymentFound: () => {},
  });
}
