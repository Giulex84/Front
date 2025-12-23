import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

type Pact = {
  id: string;
  title: string;
  description: string;
  partner: string;
  createdAt: string;
};

const CreatePact: React.FC = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [partner, setPartner] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = () => {
    if (!confirmed || !title || !partner) return;

    const newPact: Pact = {
      id: crypto.randomUUID(),
      title,
      description,
      partner,
      createdAt: new Date().toISOString(),
    };

    const existing = localStorage.getItem("pacts");
    const pacts: Pact[] = existing ? JSON.parse(existing) : [];

    pacts.push(newPact);
    localStorage.setItem("pacts", JSON.stringify(pacts));

    navigate("/dashboard");
  };

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "100vh",
          padding: "2rem",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Create a Pact
        </h1>

        <p style={{ marginBottom: "1.5rem", opacity: 0.8 }}>
          A pact is a mutual commitment based on trust and responsibility.
          <br />
          It is not a legal or financial contract.
        </p>

        <p
          style={{
            fontSize: "0.9rem",
            opacity: 0.75,
            marginBottom: "1.5rem",
          }}
        >
          Take a moment to review the commitment carefully.
          <br />
          PactPI encourages thoughtful and transparent agreements.
        </p>

        <div style={{ display: "grid", gap: "1.25rem" }}>
          <div>
            <label>Commitment title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Deliver website design within 7 days"
              style={{ width: "100%", padding: "0.6rem" }}
            />
          </div>

          <div>
            <label>Commitment description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Clearly describe what you are committing to."
              style={{
                width: "100%",
                padding: "0.6rem",
                minHeight: "110px",
              }}
            />
          </div>

          <div>
            <label>Partner Pi username</label>
            <input
              type="text"
              value={partner}
              onChange={(e) => setPartner(e.target.value)}
              placeholder="Pi username"
              style={{ width: "100%", padding: "0.6rem" }}
            />
          </div>

          <div style={{ fontSize: "0.9rem" }}>
            <label>
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
              />{" "}
              I understand this is a mutual commitment, not a financial contract.
            </label>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={handleSubmit}
            disabled={!confirmed || !title || !partner}
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor:
                confirmed && title && partner ? "pointer" : "not-allowed",
              opacity: confirmed && title && partner ? 1 : 0.6,
            }}
          >
            Create Pact
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePact;
