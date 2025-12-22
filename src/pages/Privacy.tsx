import React from "react";

const Privacy: React.FC = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <h1>Privacy Policy</h1>

      <p>
        PactPI respects user privacy and is designed with transparency and minimal
        data usage in mind.
      </p>

      <p>
        The application does not collect personal data for commercial purposes.
        No data is sold, shared, or used for advertising.
      </p>

      <p>
        When authentication is enabled, it is handled through the Pi Network SDK.
        PactPI does not store Pi wallet credentials or private keys.
      </p>

      <p>
        User activity data is used only to display informational trust signals
        within the application.
      </p>

      <p>
        By using PactPI, users acknowledge and accept this privacy policy.
      </p>
    </div>
  );
};

export default Privacy;
