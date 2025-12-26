export default function Privacy() {
  return (
    <main className="container">
      <header className="page-header">
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <section>
        <p>
          PactPI does not collect, store, or process payments. The platform is
          designed solely to help users create transparent digital agreements
          and build reputation through behavior.
        </p>

        <p>
          We may process minimal technical data required for authentication via
          Pi Network (such as username and user ID), only to enable access to
          the app.
        </p>

        <p>
          PactPI does not sell, share, or monetize user data.
        </p>

        <p>
          Users are fully responsible for any agreement they create and any
          interaction that happens outside the platform.
        </p>
      </section>
    </main>
  );
}
