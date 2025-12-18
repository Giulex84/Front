export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e5e7eb", marginTop: "4rem", padding: "1rem 0", fontSize: "0.9rem", color: "#555" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        © {new Date().getFullYear()} Pactpi
      </div>
    </footer>
  );
}
