import { useState } from "react";

export default function CreatePact() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Per ora NON salviamo nulla (review-safe)
    console.log("New pact:", { title, description, category });

    alert("Pact created (demo).");
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Create a new pact</h1>

      <p style={{ marginBottom: "1.5rem" }}>
        A pact is a clear, transparent agreement between people.  
        It helps others understand what you offer and builds trust over time.
      </p>

      {/* DISCLAIMER IMPORTANTISSIMO */}
      <div
        style={{
          background: "#f5f5f5",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <strong>PactPI does not process payments.</strong>
        <p style={{ marginTop: "0.5rem", fontSize: "0.95rem" }}>
          This platform only helps you describe an agreement.  
          Any compensation or exchange is decided independently between users.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* TITLE */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label>
            <strong>Pact title</strong>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Pi DApp development support"
            required
            style={{ width: "100%", padding: "0.6rem", marginTop: "0.5rem" }}
          />
        </div>

        {/* CATEGORY */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label>
            <strong>Category</strong>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={{ width: "100%", padding: "0.6rem", marginTop: "0.5rem" }}
          >
            <option value="">Select a category</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="content">Content & Writing</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <div style={{ marginBottom: "2rem" }}>
          <label>
            <strong>Description</strong>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe clearly what you offer, what is expected, and any important conditions."
            required
            rows={5}
            style={{ width: "100%", padding: "0.6rem", marginTop: "0.5rem" }}
          />
        </div>

        {/* SUBMIT */}
        <button type="submit">Create pact</button>
      </form>
    </main>
  );
}
