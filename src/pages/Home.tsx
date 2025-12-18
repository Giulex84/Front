export default function Home() {
  return (
    <section>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        Pactpi
      </h1>

      <h2 style={{ fontSize: "1.2rem", fontWeight: 400, marginBottom: "1.5rem" }}>
        Create and manage digital agreements in a simple, transparent way.
      </h2>

      <p style={{ maxWidth: 720, lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Pactpi is a utility platform designed to help users define, review, and confirm
        digital agreements. It focuses on clarity, accountability, and ease of use.
      </p>

      <section style={{ maxWidth: 720, marginBottom: "2rem" }}>
        <h3>What Pactpi is</h3>
        <p>
          Pactpi provides tools to structure and display agreements clearly,
          helping participants understand terms and expectations.
        </p>

        <h3>How it helps</h3>
        <p>
          All information is presented in a straightforward format to reduce
          misunderstandings and support informed decisions.
        </p>

        <h3>Designed for accessibility</h3>
        <p>
          The interface is lightweight, mobile-first, and optimized for use
          within the Pi Browser.
        </p>
      </section>

      <section style={{ maxWidth: 720, fontSize: "0.9rem", color: "#555" }}>
        <p>
          Pactpi does not provide financial advice and does not guarantee outcomes.
          Users remain responsible for reviewing and agreeing to all terms.
        </p>
      </section>
    </section>
  );
}
