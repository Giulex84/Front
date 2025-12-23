export async function piLogin() {
  if (!window.Pi) {
    throw new Error("Pi SDK not available. Use Pi Browser.");
  }

  const scopes = ["username"];

  const authResult = await window.Pi.authenticate(scopes, () => {
    console.log("Pi authentication cancelled");
  });

  return authResult;
}
