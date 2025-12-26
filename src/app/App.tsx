import { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import type { PiUser } from "../types/pi";
import { piLogin } from "../services/pi/piService";

export default function App() {
  const [, setUser] = useState<PiUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    piLogin()
      .then(res => setUser(res.user))
      .catch(err => console.error("Pi login failed", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Connecting to Pi Network…</div>;
  }

  return <AppRouter />;
}
