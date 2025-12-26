export default function Privacy() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Privacy Policy</h1>

      <p style={{ marginTop: "1rem" }}>
        PactPI respects user privacy and collects only the information strictly
        necessary to operate the platform.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Information collected</h2>
        <p>
          When using PactPI, the platform may access basic information provided
          by Pi Network, such as:
        </p>
        <ul>
          <li>Pi username</li>
          <li>Pi user identifier (UID)</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>How information is used</h2>
        <p>
          This information is used solely to:
        </p>
        <ul>
          <li>Identify users within the platform</li>
          <li>Associate pacts with their creators</li>
          <li>Support reputation and trust features</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Payments</h2>
        <p>
          <strong>PactPI does not process payments.</strong> The platform does
          not handle financial transactions or compensation of any kind.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Data sharing</h2>
        <p>
          PactPI does not sell, rent, or share personal data with third parties,
          except where required by law.
        </p>
      </section>
    </main>
  );
}
