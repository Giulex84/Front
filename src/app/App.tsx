import { useEffect, useState } from 'react';
import { piLogin } from '../services/piAuth';
import AppRouter from './AppRouter';

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        await piLogin();
        setReady(true);
      } catch (err) {
        console.error(err);
        alert('Open this app in Pi Browser');
      }
    }

    init();
  }, []);

  if (!ready) {
    return <div>Connecting to Pi Network...</div>;
  }

  return <AppRouter />;
}
