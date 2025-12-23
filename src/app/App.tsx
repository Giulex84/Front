import { useEffect, useState } from 'react';
import AppRouter from './AppRouter';
import { piLogin } from '../services/piAuth';

export default function App() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        if (!(window as any).Pi) {
          throw new Error('Open this app in Pi Browser');
        }

        const auth = await piLogin();

        console.log('Authenticated user:', auth.user);

        if (mounted) {
          setReady(true);
        }
      } catch (err: any) {
        console.error(err);
        if (mounted) {
          setError(err.message || 'Authentication failed');
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
    return <div style={{ padding: 20 }}>Connecting to Pi Network...</div>;
  }

  return <AppRouter />;
}
