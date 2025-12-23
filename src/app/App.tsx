import { useEffect, useState } from 'react';
import { piLogin } from '../services/piAuth';
import AppRouter from './AppRouter';

export default function App() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        const auth = await piLogin();

        if (!auth || !auth.user) {
          throw new Error("Invalid Pi auth response");
        }

        if (mounted) {
          setReady(true);
        }

      } catch (err) {
        console.error(err);
        if (mounted) {
          setError('Please open this app in Pi Browser');
        }
      }
    }

    init();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return <div style={{ padding: 20 }}>{error}</div>;
  }

  if (!ready) {
    return <div style={{ padding: 20 }}>Connecting to Pi Network…</div>;
  }

  return <AppRouter />;
}
