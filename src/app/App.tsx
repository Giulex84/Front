import React from "react";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import CreatePact from "../pages/CreatePact";
import PactDetail from "../pages/PactDetail";
import Profile from "../pages/Profile";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

const routes: Record<string, React.FC> = {
  "/login": Login,
  "/dashboard": Dashboard,
  "/create": CreatePact,
  "/pact": PactDetail,
  "/profile": Profile,
  "/privacy": Privacy,
  "/terms": Terms,
};

const App: React.FC = () => {
  const path = window.location.pathname;
  const Page = routes[path] || Home;
  return <Page />;
};

export default App;
