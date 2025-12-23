export async function piLogin() {
  if (!(window as any).Pi) {
    throw new Error('Pi SDK not available');
  }

  const scopes = ['username'];

  const auth = await window.Pi.authenticate(scopes, () => {
    console.log('Incomplete payment found');
  });

  // LOG IMPORTANTISSIMO (per debug)
  console.log('Pi auth success:', auth);

  return auth;
}
