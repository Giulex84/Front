// src/app/App.tsx

import { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { piLogin, PiUser } from "../services/piAuth";

export default function App() {
  const [user, setUser] = useState<PiUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const auth = await piLogin();
        setUser(auth.user);
      } catch (err) {
        console.error("Pi login failed", err);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, []);

  if (loading) {
    return <div>Connecting to Pi Network...</div>;
  }

  return <AppRouter user={user} />;
}
