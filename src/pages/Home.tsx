import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main style={{ padding: "32px", maxWidth: "720px", margin: "0 auto" }}>
        <h1>PactPI</h1>

        <p style={{ marginTop: "16px", fontSize: "18px" }}>
          Trust is not automatic. Pacts are.
        </p>

        <p style={{ marginTop: "24px", lineHeight: 1.6 }}>
          PactPI lets users create mutual digital commitments based on trust,
          responsibility, and transparency. It is not a legal or financial
          contract.
        </p>

        <div style={{ marginTop: "32px" }}>
          <a href="/login">
            <button>Enter PactPI</button>
          </a>
        </div>
      </main>

      {/* Footer SOLO in Home */}
      <Footer />
    </>
  );
}
