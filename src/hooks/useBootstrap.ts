// src/hooks/useBootstrap.ts

import { useEffect, useState } from "react";
import { piService, type PiUser } from "../services/pi/piService";

export function useBootstrap() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<PiUser | null>(null);

  useEffect(() => {
    async function bootstrap() {
      try {
        const u = await piService.init();
        setUser(u);
      } catch (err) {
        console.error("Pi bootstrap failed", err);
      } finally {
        setLoading(false);
      }
    }

    bootstrap();
  }, []);

  return { loading, user };
}
