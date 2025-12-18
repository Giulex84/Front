export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <strong>Pactpi</strong>
      </header>
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "1rem" }}>
        {children}
      </main>
    </div>
  );
}
