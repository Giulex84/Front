import { useParams } from "react-router-dom";

export default function PactDetail() {
  const { id } = useParams();

  return (
    <main className="page">
      <header className="page-header">
        <h1>Pact details</h1>
        <p className="text-muted">Pact ID: {id}</p>
      </header>

      <section className="card">
        <h3>What is offered</h3>
        <p>Design and UI support for Pi Network applications.</p>

        <h3 style={{ marginTop: "1.5rem" }}>What is expected</h3>
        <p>Clear communication and timely feedback.</p>

        <h3 style={{ marginTop: "1.5rem" }}>Reputation</h3>
        <span className="badge badge-good">Reliable contributor</span>
      </section>

      <p className="disclaimer">
        PactPI does not manage payments. Parties independently agree on any form
        of compensation.
      </p>
    </main>
  );
}
