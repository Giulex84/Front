import { useState } from "react";
import { useAgreements } from "../hooks/useAgreements";

export default function Agreements() {
  const { agreements, createAgreement, signAgreement } = useAgreements();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <h1>Agreements</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <button
        onClick={() => {
          createAgreement(title, content);
          setTitle("");
          setContent("");
        }}
      >
        Create Agreement
      </button>

      <ul>
        {agreements.map(a => (
          <li key={a.id}>
            <strong>{a.title}</strong>
            <p>{a.content}</p>

{a.signedBy ? (
  <p>Signed</p>
) : (
  <button onClick={() => signAgreement(a.id)}>
    Sign with Pi
  </button>
)}
          </li>
        ))}
      </ul>
    </div>
  );
}
