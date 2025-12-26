import { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { piLogin } from "../services/piAuth";
import type { PiUser } from "../services/piAuth";

export default function App() {
  const [user, setUser] = useState<PiUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const u = await piLogin();
        setUser(u);
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
