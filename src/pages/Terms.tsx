export default function Terms() {
  return (
    <main className="container">
      <header className="page-header">
        <h1>Terms of Service</h1>
        <p className="muted">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <section>
        <p>
          PactPI is a non-custodial platform that allows users to describe
          agreements and commitments publicly or privately.
        </p>

        <p>
          PactPI does not enforce agreements, process payments, or act as an
          intermediary between users.
        </p>

        <p>
          Any fulfillment, compensation, or dispute resolution occurs entirely
          outside the platform and is the sole responsibility of the users
          involved.
        </p>

        <p>
          By using PactPI, you agree to use the platform responsibly and not
          misrepresent agreements or other users.
        </p>
      </section>
    </main>
  );
}
