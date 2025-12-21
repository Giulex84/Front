export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: "3rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>
        Pactpi
      </h1>

      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
        Create, review, and confirm digital agreements with clarity and accountability.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2>What this is</h2>
        <p>
          Pactpi is a practical tool to formalize agreements inside the Pi ecosystem.
          No legal noise. No complexity. Just clear commitments.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>What you can do</h2>
        <ul>
          <li>Create a digital agreement</li>
          <li>Share it with another party</li>
          <li>Confirm it using Pi</li>
        </ul>
      </section>

      <section>
        <h2>Start</h2>
        <p>
          Go to <strong>Agreements</strong> to create your first commitment.
        </p>
      </section>
    </main>
  );
}

