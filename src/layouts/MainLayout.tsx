export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "1rem" }}>
      {children}
    </div>
  );
}
