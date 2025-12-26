import { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { piLogin } from "../services/piAuth";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        await piLogin();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, []);

  if (loading) {
    return <div>Connecting to Pi Network...</div>;
  }

  return <AppRouter />;
}
