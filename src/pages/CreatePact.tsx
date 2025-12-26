import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePact() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [offer, setOffer] = useState("");
  const [expectation, setExpectation] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // ⚠️ NO payments, NO blockchain action here
    // Just create a pact draft (backend / future persistence)
    console.log({
      title,
      description,
      offer,
      expectation,
    });

    navigate("/agreements");
  }

  return (
    <main className="page">
      <header className="page-header">
        <h1>Create a pact</h1>
        <p className="text-muted">
          Describe a clear agreement. PactPI does not handle payments — only
          commitments and reputation.
        </p>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pact title</label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Web design support for Pi dApp"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the context and purpose of this pact"
          />
        </div>

        <div className="form-group">
          <label>What you offer</label>
          <textarea
            required
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
            placeholder="What service, help, or contribution you provide"
          />
        </div>

        <div className="form-group">
          <label>What you expect</label>
          <textarea
            required
            value={expectation}
            onChange={(e) => setExpectation(e.target.value)}
            placeholder="What the other party commits to"
          />
        </div>

        <div className="form-actions">
          <button type="submit">Create pact</button>
          <button
            type="button"
            className="secondary"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}
