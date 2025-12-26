import { useParams, Link } from "react-router-dom";

export default function PactDetail() {
  const { id } = useParams();

  return (
    <main className="container">
      <header className="page-header">
        <h1>Pact details</h1>
        <p className="muted">Pact ID: {id}</p>
      </header>

      <div className="card">
        <h3>Example pact</h3>
        <p>
          This is a placeholder pact detail page. Later this will be populated
          from backend or storage.
        </p>
      </div>

      <Link to="/agreements" className="back-link">
        ← Back to pacts
      </Link>
    </main>
  );
}
