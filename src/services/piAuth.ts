const scopes = ['username'];

export async function piLogin() {
  if (!window.Pi) {
    throw new Error('Pi SDK not available. Open app in Pi Browser.');
  }

  const auth = await window.Pi.authenticate(scopes, () => {
    console.log('Incomplete payment found');
  });

  return auth;
}
