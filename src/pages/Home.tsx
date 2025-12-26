import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="home_hero">
        <div className="home_hero-content">
          <p className="home_eyebrow">Digital agreements for the Pi ecosystem</p>
          <h1>Clear agreements, simple confirmation.</h1>
          <p className="home_lead">
            Pactpi helps you draft, review, and confirm digital agreements with
            a straightforward flow and readable terms.
          </p>

          <div className="home_actions">
            <Link className="home_primary" to="/agreements">
              Create an agreement
            </Link>
            <Link className="home_secondary" to="/about">
              Learn how Pactpi works
            </Link>
          </div>
        </div>

        <div className="home_hero-panel">
          <h2>What you can do</h2>
          <ul>
            <li>Draft clear commitments with title and details</li>
            <li>Share the agreement for review before confirmation</li>
            <li>Confirm using Pi to record the agreement state</li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="home_section">
        <div className="home_section-header">
          <h2>How it works</h2>
          <p>
            A focused, step-by-step experience keeps agreements readable and
            everyone involved.
          </p>
        </div>

        <div className="home_grid">
          <article>
            <h3>1. Write the agreement</h3>
            <p>
              Capture the scope, timing, and responsibilities in plain language.
            </p>
          </article>

          <article>
            <h3>2. Review together</h3>
            <p>
              Share the draft so each participant can read and confirm the
              details.
            </p>
          </article>

          <article>
            <h3>3. Confirm with Pi</h3>
            <p>
              Record the confirmation inside the app so everyone sees the
              current status.
            </p>
          </article>
        </div>
      </section>

      {/* VALUES */}
      <section className="home_section home_section-muted">
        <div className="home_section-header">
          <h2>Designed for clarity</h2>
          <p>
            Pactpi is built for straightforward commitments without legal noise
            or hidden steps.
          </p>
        </div>

        <div className="home_grid">
          <article>
            <h3>Readable by default</h3>
            <p>
              Simple structure and consistent spacing keep agreements easy to
              scan.
            </p>
          </article>

          <article>
            <h3>Respectful collaboration</h3>
            <p>
              Agreements are shared for review before confirmation, so everyone
              has context.
            </p>
          </article>

          <article>
            <h3>Mindful sharing</h3>
            <p>
              Only include information you are comfortable sharing with the
              other party.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="home_cta">
        <div>
          <h2>Start with your first agreement</h2>
          <p>
            Go to Agreements to create, review, and confirm a commitment when
            you are ready.
          </p>
        </div>
        <Link className="home_primary" to="/agreements">
          Go to Agreements
        </Link>
      </section>
    </main>
  );
}
