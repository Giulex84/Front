export default function About() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>About PactPI</h1>

      <p style={{ marginTop: "1rem" }}>
        <strong>PactPI</strong> is a platform designed to help people create
        clear digital agreements, called <em>pacts</em>, and build trust over
        time within the Pi Network ecosystem.
      </p>

      <p style={{ marginTop: "1rem" }}>
        The platform focuses on transparency, reputation, and accountability.
        Users can describe what they offer, define commitments, and allow others
        to evaluate their reliability based on behavior.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>What PactPI is</h2>
        <ul>
          <li>A platform for creating digital agreements</li>
          <li>A reputation and trust-building system</li>
          <li>A transparent space for collaboration</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>What PactPI is not</h2>
        <ul>
          <li>Not a payment platform</li>
          <li>Not a marketplace for financial transactions</li>
          <li>Not an intermediary for compensation or exchanges</li>
        </ul>
      </section>

      <section
        style={{
          marginTop: "2.5rem",
          padding: "1.5rem",
          background: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <strong>PactPI does not process payments.</strong>
        <p style={{ marginTop: "0.5rem" }}>
          Any form of compensation or exchange related to a pact is decided
          independently between the involved parties, outside the platform.
        </p>
      </section>
    </main>
  );
}
