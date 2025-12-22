import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import CreatePact from "../pages/CreatePact";
import PactDetail from "../pages/PactDetail";
import Profile from "../pages/Profile";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

const App: React.FC = () => {
  const path = window.location.pathname.replace(/\/+$/, "");

  switch (path) {
    case "/login":
      return <Login />;
    case "/dashboard":
      return <Dashboard />;
    case "/create":
      return <CreatePact />;
    case "/pact":
      return <PactDetail />;
    case "/profile":
      return <Profile />;
    case "/privacy":
      return <Privacy />;
    case "/terms":
      return <Terms />;
    default:
      return <Home />;
  }
};

export default App;
