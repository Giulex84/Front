import React, { useEffect, useState } from "react";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import CreatePact from "../pages/CreatePact";
import PactDetail from "../pages/PactDetail";
import Profile from "../pages/Profile";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (window.Pi) {
      setAuthenticated(true);
    }
  }, []);

  if (!authenticated) {
    return <Home />;
  }

  const path = window.location.pathname.replace(/\/+$/, "");

  if (path === "/dashboard") return <Dashboard />;
  if (path === "/create") return <CreatePact />;
  if (path === "/pact") return <PactDetail />;
  if (path === "/profile") return <Profile />;
  if (path === "/privacy") return <Privacy />;
  if (path === "/terms") return <Terms />;

  return <Home />;
};

export default App;
