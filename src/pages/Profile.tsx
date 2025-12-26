import Header from "../components/Header";
import Badge from "../components/Badge";

export default function Profile() {
  const isVerified =
    typeof window !== "undefined" &&
    localStorage.getItem("pactpi_verified") === "true";

  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "100vh",
          padding: "2rem",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Profile
        </h1>

        <p>
          <strong>Pi username:</strong> pi_user_123
        </p>

        <div style={{ marginTop: "0.5rem" }}>
          {isVerified && <Badge type="Verified" />}
          <Badge type="Community" />
        </div>

        {!isVerified && (
          <div
            className="card"
            style={{ marginTop: "1.5rem", background: "#fffbe6" }}
          >
            <strong>Your profile is not verified</strong>
            <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
              Verification increases trust and visibility.
            </p>

            <a href="/verify">
              <button style={{ marginTop: "0.75rem" }}>
                Verify now
              </button>
            </a>
          </div>
        )}

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Trust signals
          </h2>

          <div className="card">
            <p>
              Trust indicators are based on user activity and voluntary
              verification. They are informational only.
            </p>
          </div>
        </section>

        <p style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "2rem" }}>
          Badges represent informational trust signals and do not constitute
          guarantees.
        </p>
      </main>
    </>
  );
}
