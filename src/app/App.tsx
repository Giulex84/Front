// src/app/App.tsx

import AppRouter from "./AppRouter";
import { useBootstrap } from "../hooks/useBootstrap";

export default function App() {
  const { loading } = useBootstrap();

  if (loading) {
    return <div>Connecting to Pi Network...</div>;
  }

  return <AppRouter />;
}
