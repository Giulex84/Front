import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreatePact from "./pages/CreatePact";
import PactDetail from "./pages/PactDetail";

const App: React.FC = () => {
  const path = window.location.pathname;

  if (path === "/login") return <Login />;
  if (path === "/dashboard") return <Dashboard />;
  if (path === "/create") return <CreatePact />;
  if (path === "/pact") return <PactDetail />;

  return <Home />;
};

export default App;
