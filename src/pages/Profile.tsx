import Header from "../components/Header";
import Badge from "../components/Badge";

export default function Profile() {
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
          <Badge type="Verified" />
          <Badge type="Community" />
        </div>

        <div style={{ marginTop: "1.5rem", fontSize: "0.95rem" }}>
          <p><strong>Commitments created:</strong> 5</p>
          <p><strong>Commitments fulfilled:</strong> 3</p>
          <p><strong>Commitments withdrawn:</strong> 1</p>
        </div>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Trust signals
          </h2>

          <div style={{ display: "grid", gap: "0.75rem" }}>
            <div
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                padding: "0.75rem",
                background: "#f6fffa",
              }}
            >
              <strong>Consistent participant</strong>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                Has completed multiple commitments on PactPI.
              </p>
            </div>

            <div
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                padding: "0.75rem",
                background: "#fafafa",
              }}
            >
              <strong>Limited history</strong>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                This participant has a limited number of completed pacts.
              </p>
            </div>
          </div>
        </section>

        <p style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "2rem" }}>
          Trust signals are informational only and do not represent guarantees or
          financial advice.
        </p>
      </main>
    </>
  );
}
