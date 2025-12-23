export async function piLogin() {
  if (!window.Pi) {
    throw new Error("Pi SDK not available");
  }

  try {
    const auth = await window.Pi.authenticate(
      ['username'],
      () => {
        // incomplete payments handler (vuoto per ora)
      }
    );

    console.log("Pi auth success:", auth);

    // ✅ IMPORTANTE: ritorniamo qualcosa
    return auth;

  } catch (err) {
    console.error("Pi auth failed:", err);
    throw err;
  }
}
